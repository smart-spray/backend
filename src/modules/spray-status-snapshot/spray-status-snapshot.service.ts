import { SprayStatusSnapshotModel } from "./spray-status-snapshot.schema";
import { SprayStatusSnapshot } from "./spray-status-snapshot.types";

export default class SprayStatusSnapshotService {
  public async show(id: string): Promise<SprayStatusSnapshot> {
    return await SprayStatusSnapshotModel.findById(id);
  }

  public async listAll(): Promise<SprayStatusSnapshot[]> {
    return await SprayStatusSnapshotModel.find();
  }

  public async create(
    data: Omit<SprayStatusSnapshot, "id">
  ): Promise<SprayStatusSnapshot> {
    const document = new SprayStatusSnapshotModel(data);
    return await document.save();
  }
}
