import { Request, Response } from "express";

import { SpraySnapshotService } from "./spray-snapshot.service";

const service = new SpraySnapshotService();

export class SpraySnapshotController {
  public async list(request: Request, response: Response) {
    try {
      const spraySnapshots = await service.listAll();
      return response.json(spraySnapshots);
    } catch (err) {
      console.log({ err });
      return response
        .status(500)
        .json({ error: "Could not get spray snapshots", detail: err });
    }
  }

  public async show(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const spraySnapshot = await service.show(id);
      return response.json(spraySnapshot);
    } catch (err) {
      console.log({ err });
      return response
        .status(500)
        .json({ error: `Could not get spray snapshot`, detail: err });
    }
  }

  public async create(request: Request, response: Response) {
    try {
      const spraySnapshot = await service.create(request.body);
      return response.json(spraySnapshot);
    } catch (err) {
      console.log({ err });
      return response
        .status(500)
        .json({ error: "Could not create spray snapshot", detail: err });
    }
  }
}
