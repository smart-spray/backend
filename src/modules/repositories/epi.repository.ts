import { EPIEntity } from "../entities/epi.entity";
import { BaseRepository } from "./baseRepository";

export default class EPIRepository extends BaseRepository<EPIEntity> {
  constructor() {
    super("EPIModel");
  }
}
