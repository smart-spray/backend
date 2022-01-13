import { GuideType } from "./enums/guide.type";
import { ProcessStep } from "./process.step.entity";

export class ProcessGuideEntity {
  public id: string;
  public guideType: GuideType;
  public steps: Array<ProcessStep>;
}
