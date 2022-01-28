// Essa classe vai receber os dados de vazão do sensor e interpretá-los
import { CosmosService } from "../../cosmosDB/cosmosService.js";
import { SprayEntity } from "./spray.entity";

export default class SprayService {
  public async retrieveSpray(sprayId: string): Promise<SprayEntity> {
    CosmosService.readContainer();
    return new SprayEntity();
  }

  public async retrieveSprayHealth(sprayId: string): Promise<SprayEntity> {
    CosmosService.readContainer();
    return new SprayEntity();
  }

  public async listAll(): Promise<SprayEntity[]> {
    CosmosService.readContainer();
    return [];
  }
}
