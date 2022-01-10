import { GuideType } from "../entities/guide.type";
import { ProcessGuideEntity } from "../entities/process.guide.entity";
import { IRepository } from "../repositories/repository";

export default class ProcessGuideService {
  constructor(private repository: IRepository<ProcessGuideEntity>) {}

  public async retrieveGuideByType(
    processType: GuideType
  ): Promise<ProcessGuideEntity> {
    const guide = await this.repository.findByName(processType);
    return guide;
  }
}
