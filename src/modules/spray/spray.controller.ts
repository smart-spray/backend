import { Request, Response } from "express";

import SprayService from "./spray.service";

const service = new SprayService();

export default class SprayMonitorController {
  public async getSprays(request: Request, response: Response) {
    try {
      const sprays = await service.listAll();
      return response.json(sprays);
    } catch (err) {
      console.log({ err });
      return response
        .status(500)
        .json({ error: "Could not get sprays", detail: err });
    }
  }

  public async getSensorData(request: Request, response: Response) {
    try {
      const sensorData = await service.listSensorData();
      return response.json(sensorData);
    } catch (err) {
      console.log({ err });
      return response
        .status(500)
        .json({ error: "Could not get sensor data", detail: err });
    }
  }

  public async getSprayById(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const spray = await service.retrieveSpray(id);
      return response.json(spray);
    } catch (err) {
      console.log({ err });
      return response
        .status(500)
        .json({ error: `Could not get spray`, detail: err });
    }
  }
  public async createSpray(request: Request, response: Response) {
    try {
      const spray = await service.createSpray(request.body);
      return response.json(spray);
    } catch (err) {
      console.log({ err });
      return response
        .status(500)
        .json({ error: "Could not create spray", detail: err });
    }
  }
}
