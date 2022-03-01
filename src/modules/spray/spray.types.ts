export enum SprayStatus {
  NOK = "Alguns bicos do pulverizador podem não estar funcionando corretamente, verificar necessidade de limpeza ou substituição",
  OK = "Os bicos do pulverizador estão funcionando conforme o esperado",
}

export interface Spray {
  ph: number;
  isClean: boolean;
  lastCleanDate?: Date;
  nozzleStatus: string;
  status: SprayStatus;
}
