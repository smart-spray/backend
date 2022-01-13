import { SprayEntity } from "../entities/spray.entity";
import { BaseRepository } from "./baseRepository";

export default class SprayRepository extends BaseRepository<SprayEntity> {
  constructor() {
    super("SprayModel");
  }
}
