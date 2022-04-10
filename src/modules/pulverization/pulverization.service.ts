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

    const validMessage = "P";

    if (message !== validMessage) {
      throw new Error("Invalid message, it must be 'P'");
    }

    await iotHubService.sendMessage(message);
  }

  public async health(
    params: PulverizationHealthParams
  ): Promise<PulverizationHealth> {
    const { deviceId, city, state } = params;

    const telemetryService = new TelemetryService();
    // const climatempoService = new ClimatempoService();

    // TODO: Get the most recent device given the date
    const [phAndTurbidityTelemetry] =
      await telemetryService.listAllPhAndTurbidity();

    const [flowRateTelemetry] = await telemetryService.listAllFlowRate();

    const { isClean, ph } = phAndTurbidityTelemetry;
    // TODO: get nozzleStatus as soon as Bruno finish his part
    // const { status: nozzleStatus } = flowRateTelemetry;
    const nozzleStatus = "ok";

    // const data = await climatempoService.getWeather({ city, state });

    const data = {
      data: {
        temperature: 19,
        wind_direction: "ESE",
        wind_velocity: 16.2,
        humidity: 95.1,
        condition: "Chuva",
        pressure: 937.8,
        sensation: 19,
      },
    };

    return {
      deviceId,
      isClean, // pH and turbidity
      nozzleStatus, // flow rate
      ph,
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

  public async stop(message: string): Promise<void> {
    const iotHubService = new IotHubService();

    const validMessage = "S";

    if (message !== validMessage) {
      throw new Error("Invalid message, it must be 'S'");
    }

    await iotHubService.sendMessage(message);
  }
}
