import { Schema, model } from "mongoose";

import { SprayStatusSnapshot } from "./spray-status-snapshot.types";

const sprayStatusSnapshotSchema = new Schema<SprayStatusSnapshot>({
  sprayId: { type: String, required: true },
  ph: { type: Number, required: true, default: 7 },
  nozzleStatus: { type: String, required: true },
  status: { type: String, required: true },
  createdAt: { type: Date, required: true },
});

export const SprayStatusSnapshotModel = model<SprayStatusSnapshot>(
  "spray-status-snapshots",
  sprayStatusSnapshotSchema
);
