import { SpraySnapshotModel } from "./spray-snapshot.schema";
import { SpraySnapshot } from "./spray-snapshot.types";

export class SpraySnapshotService {
  public async listAll(): Promise<SpraySnapshot[]> {
    return await SpraySnapshotModel.find();
  }

  public async show(id: string): Promise<SpraySnapshot> {
    return await SpraySnapshotModel.findById(id);
  }

  public async create(
    data: Omit<SpraySnapshot, "_id">
  ): Promise<SpraySnapshot> {
    const document = new SpraySnapshotModel(data);
    return await document.save();
  }
}
