import { Schema, model } from "mongoose";

import { Decontamination } from "./decontamination.types";

const decontaminationSchema = new Schema<Decontamination>({
  deviceId: { type: String, required: true },
  timeInSeconds: { type: Number, required: true },
  createdAt: { type: Date, required: true },
});

export const DecontaminationModel = model<Decontamination>(
  "decontaminations",
  decontaminationSchema
);
