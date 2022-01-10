import { ProcessGuideEntity } from "../entities/process.guide.entity";
import { BaseRepository } from "./baseRepository";

export default class ProcessGuideRepository extends BaseRepository<ProcessGuideEntity> {
  constructor() {
    super("GuideModel");
  }
}
