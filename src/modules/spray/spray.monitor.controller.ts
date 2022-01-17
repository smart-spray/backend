import { Response } from "express";

import SprayMonitorService from "./spray.monitor.service";

const service = new SprayMonitorService();

export default class SprayMonitorController {
  public async getSprayStatus(response: Response): Promise<Response> {
    try {
      const status = await service.getSprayStatus();

      return response.status(200).json(status);
    } catch (err) {
      console.log(err);
      return response.status(500).json({ error: "Internal server error" });
    }
  }
}
