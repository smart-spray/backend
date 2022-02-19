import { IRepository } from "../../repositories/repository";
import { PulverizationEntity } from "./pulverization.entity";

export default class PulverizationService {
  constructor(private repository: IRepository<PulverizationEntity>) {}

  public async retrievePulverization(
    pulverizationId: string
  ): Promise<PulverizationEntity> {
    const pulverization = await this.repository.findById(pulverizationId);

    if (!pulverization) {
      throw new Error("Spray not found");
    }

    return pulverization;
  }

  public async savePulverization(
    newPulverization: PulverizationEntity
  ): Promise<PulverizationEntity> {
    return await this.repository.create(newPulverization);
  }

  public async listAll(): Promise<PulverizationEntity[]> {
    return await this.repository.findAll();
  }
}
