import { Request, Response } from "express";

import EPIRepository from "../../repositories/epi.repository";
import EPIService from "./epi.service";

const repository = new EPIRepository();
const service = new EPIService(repository);

export default class ProcessGuideController {
  public async getEPI(request: Request, response: Response): Promise<Response> {
    try {
      const { processType } = request.params;

      const epi = await service.retrieveEPIByType(processType);

      return response.status(200).json(epi);
    } catch (err) {
      console.log(err);
      return response.status(500).json({ error: "Internal server error" });
    }
  }
}
