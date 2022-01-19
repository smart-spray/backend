import { CosmosService } from "../cosmosDB/cosmosService.js";
import { PulverizationEntity } from "../modules/pulverization/pulverization.entity";
import { BaseRepository } from "./baseRepository";

export default class PulverizationRepository extends BaseRepository<PulverizationEntity> {
  constructor() {
    super("PulverizationModel");
  }

  public async readDatabase(): Promise<any[]> {
    return CosmosService.readDatabase();
  }

  public async readContainer(): Promise<any[]> {
    return CosmosService.readContainer();
  }
}
