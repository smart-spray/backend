import { Request, Response } from "express";

import SprayService from "./spray.service";

const service = new SprayService();

export default class SprayMonitorController {
  public async getSprays(response: Response): Promise<Response> {
    try {
      const sprays = await service.listAll();

      return response.status(200).json(sprays);
    } catch (err) {
      console.log(err);
      return response.status(500).json({ error: "Internal server error" });
    }
  }

  public async getSprayById(
    response: Response,
    request: Request
  ): Promise<Response> {
    try {
      const { id } = request.params;
      const spray = await service.retrieveSpray(id);

      return response.status(200).json(spray);
    } catch (err) {
      console.log(err);
      return response.status(500).json({ error: "Internal server error" });
    }
  }
  public async getSprayHealth(
    response: Response,
    request: Request
  ): Promise<Response> {
    try {
      const { id } = request.params;

      const health = await service.retrieveSprayHealth(id);

      return response.status(200).json(health);
    } catch (err) {
      console.log(err);
      return response.status(500).json({ error: "Internal server error" });
    }
  }
}
