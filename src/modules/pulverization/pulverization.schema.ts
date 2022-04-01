import { Schema, model } from "mongoose";

import { Pulverization } from "./pulverization.types";

const pulverizationSchema = new Schema<Pulverization>({
  deviceId: { type: String, required: true },
  timeInSeconds: { type: Number, required: true },

  weather: {
    temperature: { type: Number, required: true },
    windDirection: { type: String, required: true },
    windVelocity: { type: Number, required: true },
    humidity: { type: Number, required: true },
    condition: { type: String, required: true },
    pressure: { type: Number, required: true },
    sensation: { type: String, required: true },
  },

  createdAt: { type: Date, required: true },
});

export const PulverizationModel = model<Pulverization>(
  "pulverizations",
  pulverizationSchema
);
