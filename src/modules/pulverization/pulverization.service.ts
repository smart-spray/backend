import { IotHubService } from "../../infrastructure/iot-hub/service";
import { ClimatempoService } from "../climatempo/climatempo.service";
import { TelemetryService } from "../telemetry/telemetry.service";
import { PulverizationModel } from "./pulverization.schema";
import {
  Pulverization,
  PulverizationHealth,
  PulverizationHealthParams,
} from "./pulverization.types";

export class PulverizationService {
  public async listAll(): Promise<Pulverization[]> {
    return await PulverizationModel.find();
  }

  public async show(id: string): Promise<Pulverization> {
    return await PulverizationModel.findById(id);
  }

  public async create(
    data: Omit<Pulverization, "_id">
  ): Promise<Pulverization> {
    const document = new PulverizationModel(data);
    return await document.save();
  }

  public async start(message: string): Promise<void> {
    const iotHubService = new IotHubService();

    const validMessage = "Pulverização";

    if (message !== validMessage) {
      throw new Error("Invalid message, it must be 'Puverização'");
    }

    await iotHubService.sendMessage(message);
  }

  public async health(
    params: PulverizationHealthParams
  ): Promise<PulverizationHealth> {
    const { deviceId, city, state } = params;

    const telemetryService = new TelemetryService();
    const climatempoService = new ClimatempoService();

    // TODO: Get the most recent device given the date
    const [phAndTurbidityTelemetry] =
      await telemetryService.listAllPhAndTurbidity();

    const [flowRateTelemetry] = await telemetryService.listAllFlowRate();

    const { isClean } = phAndTurbidityTelemetry;
    // TODO: get nozzleStatus as soon as Bruno finish his part
    // const { status: nozzleStatus } = flowRateTelemetry;
    const nozzleStatus = "ok";

    const data = await climatempoService.getWeather({ city, state });

    return {
      deviceId,
      isClean,
      nozzleStatus,
      weather: {
        temperature: data.data.temperature,
        windDirection: data.data.wind_direction,
        windVelocity: data.data.wind_velocity,
        humidity: data.data.humidity,
        condition: data.data.condition,
        pressure: data.data.pressure,
        sensation: data.data.sensation,
      },
    };
  }
}
