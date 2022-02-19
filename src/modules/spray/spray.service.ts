/* eslint-disable prettier/prettier */
// Essa classe vai receber os dados de vazão do sensor e interpretá-los
import * as CosmosService from "../../cosmosDB/cosmosService.js";
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
    console.log("m=listAll()");
    // const containerData = await CosmosService.readContainer();
    const spray: SprayEntity = {
      id: "12212",
      ph: 1010,
      isClean: true,
      lastCleanDate: "2020-10-10",
      nozzleStatus: "Limpo",
    };
    return [spray];
  }
}
