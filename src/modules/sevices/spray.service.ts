import { SprayEntity } from "../entities/spray.entity";
import { IRepository } from "../repositories/repository";

export default class SprayService {
  constructor(private repository: IRepository<SprayEntity>) {}

  public async retrieveSpray(sprayId: string): Promise<SprayEntity> {
    const spray = await this.repository.findById(sprayId);

    if (!spray) {
      throw new Error("Spray not found");
    }

    return spray;
  }

  public async create(newSpray: SprayEntity): Promise<SprayEntity> {
    return await this.repository.create(newSpray);
  }

  public async listAll(): Promise<SprayEntity[]> {
    return await this.repository.findAll();
  }
}
