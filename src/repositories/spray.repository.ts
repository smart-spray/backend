import { CosmosService } from "../cosmosDB/cosmosService.js";
import { SprayEntity } from "../modules/entities/spray.entity";
import { BaseRepository } from "./baseRepository";

export default class SprayRepository extends BaseRepository<SprayEntity> {
  constructor() {
    super("SprayModel");
  }

  public async readDatabase(): Promise<any[]> {
    return CosmosService.readDatabase();
  }

  public async readContainer(): Promise<any[]> {
    return CosmosService.readContainer();
  }
}
