import { Schema, model } from "mongoose";

import { RawTelemetry } from "./telemetry.types";

const telemetrySchema = new Schema<RawTelemetry>({
  deviceId: { type: String, required: true },
  pulverizacao: { type: Boolean, required: true },

  limpeza: { type: Boolean, required: false },
  ph: { type: Number, required: false },
  tb: { type: Number, required: false },

  sensor1: { type: Number, required: false },
  sensor2: { type: Number, required: false },
  sensor3: { type: Number, required: false },
  valor: { type: String, required: false },
  setor: { type: String, required: false },
});

export const TelemetryModel = model<RawTelemetry>(
  "iot-data",
  telemetrySchema,
  "iot-data"
);
