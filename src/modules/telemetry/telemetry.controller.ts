import { Request, Response } from "express";

import { TelemetryService } from "./telemetry.service";

const service = new TelemetryService();

export class TelemetryController {
  public async getPhAndTurbidity(request: Request, response: Response) {
    try {
      const telemetries = await service.listAllPhAndTurbidity();
      return response.json(telemetries);
    } catch (err) {
      console.log({ err });
      return response
        .status(500)
        .json({ error: "Could not get telemetries", detail: err });
    }
  }

  public async getFlowRate(request: Request, response: Response) {
    try {
      const telemetries = await service.listAllFlowRate();
      return response.json(telemetries);
    } catch (err) {
      console.log({ err });
      return response
        .status(500)
        .json({ error: "Could not get telemetries", detail: err });
    }
  }
}
