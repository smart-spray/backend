import { IotHubService } from "../../infrastructure/iot-hub/service";
import { DecontaminationModel } from "./decontamination.schema";
import { Decontamination } from "./decontamination.types";

export class DecontaminationService {
  public async listAll(): Promise<Decontamination[]> {
    return await DecontaminationModel.find();
  }

  public async show(id: string): Promise<Decontamination> {
    return await DecontaminationModel.findById(id);
  }

  public async create(
    data: Omit<Decontamination, "_id">
  ): Promise<Decontamination> {
    const document = new DecontaminationModel(data);
    return await document.save();
  }

  public async start(message: string): Promise<void> {
    const iotHubService = new IotHubService();
    const validMessage = "L";

    if (message !== validMessage) {
      throw new Error("Invalid message, it must be 'L'");
    }

    await iotHubService.sendMessage(message);
  }

  public async stop(message: string): Promise<void> {
    const iotHubService = new IotHubService();
    const validMessage = "S";

    if (message !== validMessage) {
      throw new Error("Invalid message, it must be 'S'");
    }

    await iotHubService.sendMessage(message);
  }
}
