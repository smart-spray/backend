import { GuideType } from "../entities/enums/guide.type";
import { EPIEntity } from "../entities/epi.entity";
import { IRepository } from "../repositories/repository";

export default class EPIService {
  constructor(private repository: IRepository<EPIEntity>) {}

  public async retrieveEPIByType(processType: GuideType): Promise<EPIEntity> {
    const epi = await this.repository.findByName(processType);
    return epi;
  }
}
