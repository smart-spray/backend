import { PulverizationEntity } from "../modules/pulverization/pulverization.entity";
import { BaseRepository } from "./baseRepository";

export default class PulverizationRepository extends BaseRepository<PulverizationEntity> {
  constructor() {
    super("PulverizationModel");
  }
}
