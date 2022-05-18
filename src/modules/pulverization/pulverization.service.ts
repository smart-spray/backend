import { IotHubService } from "../../infrastructure/iot-hub/service";
import { ClimatempoService } from "../climatempo/climatempo.service";
import { TelemetryService } from "../telemetry/telemetry.service";
import { PulverizationModel } from "./pulverization.schema";
import {
  Pulverization,
  PulverizationHealth,
  PulverizationHealthParams,
  PulverizationWeather,
} from "./pulverization.types";

export class PulverizationService {
  public async listAll(): Promise<Pulverization[]> {
    return await PulverizationModel.find().sort([["createdAt", -1]]);
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

    await Promise.all([
      await iotHubService.sendMessage(message, "one"),
      await iotHubService.sendMessage(message, "two"),
    ]);
  }

  public async health(
    params: PulverizationHealthParams
  ): Promise<PulverizationHealth> {
    const { deviceId, city, state } = params;

    const telemetryService = new TelemetryService();
    // const climatempoService = new ClimatempoService();

    const [phAndTurbidityTelemetry] =
      await telemetryService.listAllPhAndTurbidity();

    console.log({ phAndTurbidityTelemetry });

    const [flowRateTelemetry] = await telemetryService.listAllFlowRate();

    const { isClean, ph, createdAt } = phAndTurbidityTelemetry;
    const { status: nozzleStatus } = flowRateTelemetry;

    // const data = await climatempoService.getWeather({ city, state });
    const data = {
      data: {
        temperature: 32,
        wind_direction: "ESE",
        wind_velocity: 16.2,
        humidity: 95.1,
        condition: "Chuva",
        pressure: 937.8,
        sensation: 19,
      },
    };

    const {
      temperature,
      wind_direction: windDirection,
      wind_velocity: windVelocity,
      humidity,
      condition,
      pressure,
      sensation,
    } = data.data;

    const weather = {
      temperature,
      windDirection,
      windVelocity,
      humidity,
      condition,
      pressure,
      sensation,
    };

    const climateErrors = this.healthValidations(weather);

    return {
      deviceId,
      isClean, // pH and turbidity
      nozzleStatus, // flow rate
      ph,
      weather,
      climateErrors,
      createdAt: new Date(createdAt),
    };
  }

  public async stop(message: string): Promise<void> {
    const iotHubService = new IotHubService();

    const validMessage = "S";

    if (message !== validMessage) {
      throw new Error("Invalid message, it must be 'S'");
    }

    await Promise.all([
      await iotHubService.sendMessage(message, "one"),
      await iotHubService.sendMessage(message, "two"),
    ]);
  }

  private healthValidations({
    temperature,
    windVelocity,
    humidity,
  }: PulverizationWeather): string {
    let errors =
      "Cuidado! Você está prestes a iniciar a pulverização em condições de ";
    let haveErrors = false;

    if (temperature < 10) {
      errors += "baixa temperatura, ";
      haveErrors = true;
    }

    if (temperature > 30) {
      errors += "alta temperatura, ";
      haveErrors = true;
    }

    if (windVelocity > 10) {
      errors += "alta velocidade do vento, ";
      haveErrors = true;
    }

    if (humidity < 55) {
      errors += " baixa umidade do ar, ";
      haveErrors = true;
    }

    return haveErrors ? errors.substr(0, errors.length - 2) : "";
  }
}
