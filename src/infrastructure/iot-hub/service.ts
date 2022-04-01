import { Message } from "azure-iot-common";
import { v4 as uuidv4 } from "uuid";

import { iotHubConfig } from "./config";
import { iotHubClient } from "./connection";

export class IotHubService {
  async sendMessage(msg: string): Promise<void> {
    try {
      const { message: connMessage } = await iotHubClient.open();

      console.log("Azure Iot Hub successfully connected:", { connMessage });

      iotHubClient.getFeedbackReceiver((err, receiver) =>
        receiver.on("message", (msg) =>
          console.log("Feedback message:", msg.getData().toString("utf-8"))
        )
      );

      const message = new Message(msg);
      message.ack = "full";
      message.messageId = uuidv4();

      console.log("Sending message:", JSON.stringify(message.getData()));

      const { message: receivedMessage, result } = await iotHubClient.send(
        iotHubConfig.targetDevice,
        message
      );

      console.log("Send status: ", result);
      console.log("Sent message: ", receivedMessage);

      await iotHubClient.close();

      return;
    } catch (err) {
      console.log({ err });
    }
  }
}
