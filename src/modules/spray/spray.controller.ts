import { Response } from "express";

import SprayService from "./spray.service";

const service = new SprayService();

export default class SprayMonitorController {
  public async getSprayStatus(response: Response): Promise<Response> {
    try {
      const sprays = await service.listAll();

      return response.status(200).json(sprays);
    } catch (err) {
      console.log(err);
      return response.status(500).json({ error: "Internal server error" });
    }
  }
}
