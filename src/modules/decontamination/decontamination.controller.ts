import { Request, Response } from "express";

import { DecontaminationService } from "./decontamination.service";

const service = new DecontaminationService();

export class DecontaminationController {
  public async list(request: Request, response: Response) {
    try {
      const decontaminations = await service.listAll();
      return response.json(decontaminations);
    } catch (err) {
      console.log({ err });
      return response
        .status(500)
        .json({ error: "Could not get decontaminations", detail: err });
    }
  }

  public async show(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const decontamination = await service.show(id);
      return response.json(decontamination);
    } catch (err) {
      console.log({ err });
      return response
        .status(500)
        .json({ error: `Could not get decontamination`, detail: err });
    }
  }

  public async create(request: Request, response: Response) {
    try {
      const decontamination = await service.create(request.body);
      return response.json(decontamination);
    } catch (err) {
      console.log({ err });
      return response
        .status(500)
        .json({ error: "Could not create decontamination", detail: err });
    }
  }

  public async start(request: Request, response: Response) {
    try {
      await service.start(request.body.message);
      return response.status(200).json({
        message: "Decontamination process has been successfully started",
      });
    } catch (err) {
      console.log({ err });
      return response
        .status(500)
        .json({ error: "Could not start decontamination", detail: err });
    }
  }

  public async stop(request: Request, response: Response) {
    try {
      await service.start(request.body.message);
      return response.status(200).json({
        message: "Decontamination process has been successfully stopped",
      });
    } catch (err) {
      console.log({ err });
      return response
        .status(500)
        .json({ error: "Could not stop decontamination", detail: err });
    }
  }
}
