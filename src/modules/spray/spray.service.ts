import { CosmosService } from "src/infrastructure/cosmos/service";

import { SprayEntity } from "./spray.entity";

export default class SprayService {
  private cosmosService: CosmosService;

  constructor() {
    this.cosmosService = new CosmosService();
  }

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

  public async listSensorData(): Promise<any[]> {
    const { resources } = await this.cosmosService.readContainer();
    return resources;
  }
}
