import { Schema, model } from "mongoose";

import { Spray } from "./spray.types";

const spraySchema = new Schema<Spray>({
  ph: { type: Number, required: true, default: 7 },
  isClean: { type: Boolean, required: true, default: true },
  lastCleanDate: { type: Date, required: true },
  nozzleStatus: { type: String, required: true },
  status: { type: String, required: true },
});

export const SprayModel = model<Spray>("sprays", spraySchema);
