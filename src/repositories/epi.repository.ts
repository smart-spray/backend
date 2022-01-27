import { EPIEntity } from "../modules/epi/epi.entity";
import { BaseRepository } from "./baseRepository";

export default class EPIRepository extends BaseRepository<EPIEntity> {
  constructor() {
    super("EPIModel");
  }
}
