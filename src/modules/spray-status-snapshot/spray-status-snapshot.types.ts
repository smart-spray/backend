export enum SprayStatus {
  NOK = "Alguns bicos do pulverizador podem não estar funcionando corretamente, verificar necessidade de limpeza ou substituição",
  OK = "Os bicos do pulverizador estão funcionando conforme o esperado",
}

export interface SprayStatusSnapshot {
  sprayId: string;
  ph: number;
  nozzleStatus: string;
  status: SprayStatus;
  createdAt: Date;
}
