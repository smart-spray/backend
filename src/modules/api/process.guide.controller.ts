import { Request, Response } from "express";

import { GuideType } from "../entities/enums/guide.type";
import ProcessGuideRepository from "../repositories/process.guide.repository";
import ProcessGuideService from "../sevices/process.guide.service";

const repository = new ProcessGuideRepository();
const service = new ProcessGuideService(repository);

export default class ProcessGuideController {
  public async getProcessGuide(
    request: Request,
    response: Response
  ): Promise<Response> {
    try {
      const { processType } = request.params;

      const guide = await service.retrieveGuideByType(GuideType[processType]);

      return response.status(200).json(guide);
    } catch (err) {
      console.log(err);
      return response.status(500).json({ error: "Internal server error" });
    }
  }
}
