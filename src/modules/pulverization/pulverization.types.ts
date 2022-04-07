export interface PulverizationWeather {
  temperature: number;
  windDirection: string;
  windVelocity: number;
  humidity: number;
  condition: string;
  pressure: number;
  sensation: number;
}

export interface Pulverization {
  _id: string;
  deviceId: string;
  timeInSeconds: number;
  weather: PulverizationWeather;
  createdAt: Date;
}

export interface PulverizationHealthParams {
  deviceId: string;
  city: string;
  state: string;
}

export interface PulverizationHealth {
  deviceId: string;
  isClean: boolean;
  nozzleStatus: "ok" | "nok";
  weather: PulverizationWeather;
}
