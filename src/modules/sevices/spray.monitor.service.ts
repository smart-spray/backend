// Essa classe vai receber os dados de vazão do sensor e interpretá-los
import { SprayStatus } from "../entities/enums/spray.status";
import { SprayMonitorEntity } from "../entities/spray.monitor.entity";

export default class SprayMonitorService {
  public async getSprayStatus(): Promise<SprayStatus> {
    const sprayData = await this.retriveSprayData();
    if (sprayData.sprayData === "invalid") {
      return SprayStatus.NOK;
    }
    return SprayStatus.OK;
  }

  protected async retriveSprayData(): Promise<SprayMonitorEntity> {
    const guide = new SprayMonitorEntity();
    return guide;
  }
}
