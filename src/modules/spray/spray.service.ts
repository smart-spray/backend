/* eslint-disable prettier/prettier */
// Essa classe vai receber os dados de vazão do sensor e interpretá-los
import * as CosmosService from "../../cosmosDB/cosmosService.js";
import { SprayEntity } from "./spray.entity";

export default class SprayService {
  // Dados de Spray mocados para teste de rota da API
  private spray(sprayId: string): SprayEntity {
    return {
      id: sprayId,
      ph: 1010,
      isClean: true,
      lastCleanDate: "2020-10-10",
      nozzleStatus: "Limpo",
    };
  }

  public async retrieveSpray(sprayId: string): Promise<SprayEntity> {
    return this.spray(sprayId);
  }

  public async retrieveSprayHealth(sprayId: string): Promise<SprayEntity> {
    return this.spray(sprayId);
  }

  public async listAll(): Promise<SprayEntity[]> {
    return [this.spray("1L")];
  }

  public async listSensorData(): Promise<[]> {
    const containerData = await CosmosService.readContainer();
    return containerData.resources;
  }
}
