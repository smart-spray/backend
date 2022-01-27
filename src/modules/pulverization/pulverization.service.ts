import { IRepository } from "../../repositories/repository";
import { PulverizationEntity } from "./pulverization.entity";

export default class PulverizationService {
  constructor(private repository: IRepository<PulverizationEntity>) {}

  public async retrieveSpray(sprayId: string): Promise<PulverizationEntity> {
    const spray = await this.repository.findById(sprayId);

    if (!spray) {
      throw new Error("Spray not found");
    }

    return spray;
  }

  public async create(
    newSpray: PulverizationEntity
  ): Promise<PulverizationEntity> {
    return await this.repository.create(newSpray);
  }

  public async listAll(): Promise<PulverizationEntity[]> {
    return await this.repository.findAll();
  }
}
