export enum NozzleStatus {
  nok = "Alguns bicos do pulverizador podem não estar funcionando corretamente, verificar necessidade de limpeza ou substituição",
  ok = "Os bicos do pulverizador estão funcionando conforme o esperado",
}

export enum Cycle {
  decontamination = "decontamination",
  pulverization = "pulverization",
}

export interface SpraySnapshot {
  _id: string;
  deviceId: string;
  ph: number;
  tb: number;
  isClean: boolean;
  nozzleStatus: NozzleStatus | null;
  cycle: Cycle;
  createdAt: Date;
}
