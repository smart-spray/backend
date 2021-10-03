import { Request, Response } from "express";

import { HealthService } from "./health.service";

export class HealthController {
  getHealth(request: Request, response: Response) {
    const healthCheckService = new HealthService();
    return response.status(200).json(healthCheckService.getHealth());
  }
}
