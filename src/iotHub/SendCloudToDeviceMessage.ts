import { Message } from "azure-iot-common";
import { Client } from "azure-iothub";

export default class SendCloudToDeviceMessage {
  private iotData() {
    const connectionString =
      "HostName=tcc-agro-iot-hub.azure-devices.net;SharedAccessKeyName=service;SharedAccessKey=SA5N9KsoyqDYJWM9ytaOHQQFUZqyEz4Kp5Sf4vykDfY=";
    const targetDevice = "esp32";
    const serviceClient = Client.fromConnectionString(connectionString);

    return {
      connectionString,
      targetDevice,
      serviceClient,
    };
  }
  private printResultFor(op) {
    return function printResult(err, res) {
      if (err) console.log(`${op} error: ${err.toString()}`);
      if (res) console.log(`${op} status: ${res.constructor.name}`);
    };
  }

  private receiveFeedback(err, receiver) {
    receiver.on("message", function (msg) {
      console.log("Feedback message:");
      console.log(msg.getData().toString("utf-8"));
    });
  }
  public sendMessage(msg: string) {
    const hubIot = this.iotData();
    hubIot.serviceClient.open(function (err) {
      if (err) {
        console.error(`Could not connect: ${err.message}`);
      } else {
        console.log("Service client connected");
        hubIot.serviceClient.getFeedbackReceiver(this.receiveFeedback());
        const message = new Message("Cloud to device message.");
        message.ack = "full";
        message.messageId = "My Message ID";
        console.log(`Sending message: ${message.getData()}`);
        hubIot.serviceClient.send(
          hubIot.targetDevice,
          msg,
          this.printResultFor("send")
        );
      }
    });
  }
}
