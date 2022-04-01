import { Request, Response } from "express";

import { PulverizationService } from "./pulverization.service";

const service = new PulverizationService();

export class PulverizationController {
  public async health(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const { city, state } = request.query;
      const pulverization = await service.health({
        deviceId: id,
        city: city as string,
        state: state as string,
      });
      return response.json(pulverization);
    } catch (err) {
      console.log({ err });
      return response
        .status(500)
        .json({ error: `Could not get pulverization`, detail: err });
    }
  }

  public async list(request: Request, response: Response) {
    try {
      const pulverizations = await service.listAll();
      return response.json(pulverizations);
    } catch (err) {
      console.log({ err });
      return response
        .status(500)
        .json({ error: "Could not get pulverizations", detail: err });
    }
  }

  public async show(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const pulverization = await service.show(id);
      return response.json(pulverization);
    } catch (err) {
      console.log({ err });
      return response
        .status(500)
        .json({ error: `Could not get pulverization`, detail: err });
    }
  }

  public async create(request: Request, response: Response) {
    try {
      const pulverization = await service.create(request.body);
      return response.json(pulverization);
    } catch (err) {
      console.log({ err });
      return response
        .status(500)
        .json({ error: "Could not create pulverization", detail: err });
    }
  }

  public async start(request: Request, response: Response) {
    try {
      await service.start(request.body.message);
      return response.status(200).json({
        message: "Pulverization process has been successfully started",
      });
    } catch (err) {
      console.log({ err });
      return response
        .status(500)
        .json({ error: "Could not start pulverization", detail: err });
    }
  }
}
