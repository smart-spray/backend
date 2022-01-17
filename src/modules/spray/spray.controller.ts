import { Request, Response } from "express";

import SprayRepository from "../../repositories/spray.repository";
import { SprayEntity } from "../entities/spray.entity";
import SprayService from "./spray.service";

const repository = new SprayRepository();
const service = new SprayService(repository);

export default class ProcessGuideController {
  public async getSpray(
    request: Request,
    response: Response
  ): Promise<Response> {
    try {
      const { id } = request.params;

      const epi = await service.retrieveSpray(id);

      return response.status(200).json(epi);
    } catch (err) {
      console.log(err);
      return response.status(500).json({ error: "Internal server error" });
    }
  }

  public async SaveSpray(
    request: Request,
    response: Response
  ): Promise<Response> {
    try {
      const newSpray: SprayEntity = request.body;

      const spray = await service.create(newSpray);

      return response.status(200).json(spray);
    } catch (err) {
      console.log(err);
      return response.status(500).json({ error: "Internal server error" });
    }
  }

  public async listAllSpray(response: Response): Promise<Response> {
    try {
      const sprays = await service.listAll();

      return response.status(200).json(sprays);
    } catch (err) {
      console.log(err);
      return response.status(500).json({ error: "Internal server error" });
    }
  }
}
