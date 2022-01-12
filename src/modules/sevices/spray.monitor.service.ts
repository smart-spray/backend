// Essa classe vai receber os dados de vazão do sensor e interpretá-los
import { SprayMonitorEntity } from "../entities/spray.monitor.entity";
import { SprayStatus } from "../entities/spray.status";

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
