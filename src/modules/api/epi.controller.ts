import { Request, Response } from "express";

import { GuideType } from "../entities/enums/guide.type";
import EPIRepository from "../repositories/epi.repository";
import EPIService from "../sevices/epi.service";

const repository = new EPIRepository();
const service = new EPIService(repository);

export default class ProcessGuideController {
  public async getEPI(request: Request, response: Response): Promise<Response> {
    try {
      const { processType } = request.params;

      const epi = await service.retrieveEPIByType(GuideType[processType]);

      return response.status(200).json(epi);
    } catch (err) {
      console.log(err);
      return response.status(500).json({ error: "Internal server error" });
    }
  }
}
