import { Request, Response } from "express";

import SprayStatusSnapshotService from "./spray-status-snapshot.service";

const service = new SprayStatusSnapshotService();

export default class SprayStatusSnapshotController {
  public async list(request: Request, response: Response) {
    try {
      const sprayStatusSnapshots = await service.listAll();
      return response.json(sprayStatusSnapshots);
    } catch (err) {
      console.log({ err });
      return response
        .status(500)
        .json({ error: "Could not get spray status snapshots", detail: err });
    }
  }

  public async show(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const sprayStatusSnapshot = await service.show(id);
      return response.json(sprayStatusSnapshot);
    } catch (err) {
      console.log({ err });
      return response
        .status(500)
        .json({ error: `Could not get spray status snapshot`, detail: err });
    }
  }
  public async create(request: Request, response: Response) {
    try {
      const sprayStatusSnapshot = await service.create(request.body);
      return response.json(sprayStatusSnapshot);
    } catch (err) {
      console.log({ err });
      return response
        .status(500)
        .json({ error: "Could not create spray status snapshot", detail: err });
    }
  }
}
