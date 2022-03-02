import { CosmosService } from "../../infrastructure/cosmos/service";
import { SprayModel } from "./spray.schema";
import { Spray } from "./spray.types";

export default class SprayService {
  private cosmosService: CosmosService;

  constructor() {
    this.cosmosService = new CosmosService();
  }

  public async retrieveSpray(id: string): Promise<Spray> {
    return await SprayModel.findById(id);
  }

  public async listAll(): Promise<Spray[]> {
    const sprays = await SprayModel.find();
    return sprays;
  }

  public async createSpray(data: Omit<Spray, "id">): Promise<Spray> {
    const document = new SprayModel(data);

    return await document.save();
  }

  public async listSensorData(): Promise<any[]> {
    const { resources } = await this.cosmosService.readContainer();
    return resources;
  }
}
