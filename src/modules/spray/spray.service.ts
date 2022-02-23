import { CosmosService } from "src/infrastructure/cosmos/service";
import { v4 as uuidv4 } from "uuid";

import { SprayModel } from "./spray.schema";
import { Spray } from "./spray.types";

export default class SprayService {
  private cosmosService: CosmosService;

  constructor() {
    this.cosmosService = new CosmosService();
  }

  public async retrieveSpray(id: string): Promise<Spray> {
    return await SprayModel.findOne({ id });
  }

  public async listAll(): Promise<Spray[]> {
    return await SprayModel.find();
  }

  public async createSpray(data: Omit<Spray, "id">): Promise<Spray> {
    const document = new SprayModel({
      id: uuidv4(),
      ...data,
    });

    return await document.save();
  }

  public async listSensorData(): Promise<any[]> {
    const { resources } = await this.cosmosService.readContainer();
    return resources;
  }
}
