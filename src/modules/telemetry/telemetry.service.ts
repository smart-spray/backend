import { TelemetryModel } from "./telemetry.schema";
import { PhAndTurbidityTelemetry, FlowRateTelemetry } from "./telemetry.types";

export class TelemetryService {
  public async listAllPhAndTurbidity(): Promise<PhAndTurbidityTelemetry[]> {
    const telemetries = await TelemetryModel.find().sort([["createdAt", -1]]);

    if (!telemetries.length) return [];

    const phAndTurbidityTelemetries: PhAndTurbidityTelemetry[] = telemetries
      .filter((telemetry) => !telemetry.sensor1)
      .map(
        (telemetry) =>
          ({
            _id: telemetry._id,
            deviceId: telemetry.deviceId,
            isClean: telemetry.limpeza,
            isPulverizing: telemetry.pulverizacao,
            ph: telemetry.ph,
            tb: telemetry.tb,
            createdAt: telemetry.createdAt,
          } as PhAndTurbidityTelemetry)
      );

    return phAndTurbidityTelemetries;
  }

  public async listAllFlowRate(): Promise<FlowRateTelemetry[]> {
    const telemetries = await TelemetryModel.find().sort([["createdAt", -1]]);

    if (!telemetries.length) return [];

    const flowRateTelemetries: FlowRateTelemetry[] = telemetries
      .filter((telemetry) => !!telemetry.sensor1)
      .map(
        (telemetry) =>
          ({
            _id: telemetry._id,
            deviceId: telemetry.deviceId,
            isPulverizing: telemetry.pulverizacao,
            sensor1: telemetry.sensor1,
            sensor2: telemetry.sensor2,
            sensor3: telemetry.sensor3,
            status: telemetry.valor,
            sector: telemetry.setor,
            quantityObstructed: telemetry.quantidadeObstruida,
            createdAt: telemetry.createdAt,
          } as FlowRateTelemetry)
      );

    return flowRateTelemetries;
  }
}
