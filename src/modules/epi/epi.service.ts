import { IRepository } from "../../repositories/repository";
import { EPIEntity } from "./epi.entity";

export default class EPIService {
  constructor(private repository: IRepository<EPIEntity>) {}

  public async retrieveEPIByType(processType: string): Promise<EPIEntity> {
    const epi = await this.repository.findByName(processType);
    return epi;
  }
}
