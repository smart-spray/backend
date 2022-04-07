interface RawPhAndTurbidity {
  _id: string;
  deviceId: string;
  pulverizacao: boolean;
  limpeza?: boolean;
  ph?: number;
  tb?: number;
  createdAt: string;
}

interface RawFlowRate {
  _id: string;
  deviceId: string;
  pulverizacao: boolean;
  sensor1?: number;
  sensor2?: number;
  sensor3?: number;
  valor?: "ok" | "nok";
  setor?: string;
  createdAt: string;
}

export interface RawTelemetry extends RawPhAndTurbidity, RawFlowRate {}

export interface PhAndTurbidityTelemetry {
  _id: string;
  deviceId: string;
  isClean: boolean;
  isPulverizing: boolean;
  ph: number;
  tb: number;
  createdAt: string;
}

export interface FlowRateTelemetry {
  _id: string;
  deviceId: string;
  isPulverizing: boolean;
  sensor1: number;
  sensor2: number;
  sensor3: number;
  status: "ok" | "nok";
  sector: string;
  createdAt: string;
}
