import { Schema, model } from "mongoose";

import { SpraySnapshot } from "./spray-snapshot.types";

const spraySnapshotSchema = new Schema<SpraySnapshot>({
  deviceId: { type: String, required: true },
  ph: { type: Number, required: true, default: 7 },
  tb: { type: Number, required: true, default: 7 },
  isClean: { type: Boolean, required: true },
  nozzleStatus: { type: String, required: false },
  cycle: { type: String, required: true },
  createdAt: { type: Date, required: true },
});

export const SpraySnapshotModel = model<SpraySnapshot>(
  "spray-snapshots",
  spraySnapshotSchema
);
