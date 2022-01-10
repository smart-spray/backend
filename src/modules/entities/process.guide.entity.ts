import { GuideType } from "./guide.type";
import { ProcessStep } from "./process.step";

export class ProcessGuideEntity {
  public id: string;
  public guideType: GuideType;
  public steps: Array<ProcessStep>;
}
