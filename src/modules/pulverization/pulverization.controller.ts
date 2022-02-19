import { Request, Response } from "express";

import PulverizationRepository from "../../repositories/pulverization.repository";
import { PulverizationEntity } from "./pulverization.entity";
import PulverizationService from "./pulverization.service";

const repository = new PulverizationRepository();
const service = new PulverizationService(repository);

export default class PulverizationController {
  public async getPulverization(request: Request, response: Response) {
    try {
      const { id } = request.params;

      const pulverization = await service.retrievePulverization(id);

      return response.status(200).json(pulverization);
    } catch (err) {
      console.log(err);
      return response.status(500).json({ error: "Internal server error" });
    }
  }

  public async savePulverization(request: Request, response: Response) {
    try {
      const newpulverization: PulverizationEntity = request.body;

      const pulverization = await service.savePulverization(newpulverization);

      return response.status(200).json(pulverization);
    } catch (err) {
      console.log(err);
      return response.status(500).json({ error: "Internal server error" });
    }
  }

  public async listAllPulverization(request: Request, response: Response) {
    try {
      const sprays = await service.listAll();

      return response.status(200).json(sprays);
    } catch (err) {
      console.log(err);
      return response.status(500).json({ error: "Internal server error" });
    }
  }
}
