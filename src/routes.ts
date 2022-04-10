import { Router } from "express";

import { DecontaminationController } from "./modules/decontamination/decontamination.controller";
import { PulverizationController } from "./modules/pulverization/pulverization.controller";
import { SpraySnapshotController } from "./modules/spray-snapshot/spray-snapshot.controller";
import { TelemetryController } from "./modules/telemetry/telemetry.controller";

const routes = Router();

const decontamination = new DecontaminationController();
const pulverization = new PulverizationController();
const spraySnapshot = new SpraySnapshotController();
const telemetry = new TelemetryController();

routes.get("/decontaminations", decontamination.list);
routes.get("/decontaminations/:id", decontamination.show);
routes.post("/decontaminations", decontamination.create);
routes.post("/decontaminations/start", decontamination.start);
routes.put("/decontaminations/stop", decontamination.stop);

routes.get("/pulverizations/health/:id", pulverization.health);
routes.get("/pulverizations", pulverization.list);
routes.get("/pulverizations/:id", pulverization.show);
routes.post("/pulverizations", pulverization.create);
routes.post("/pulverizations/start", pulverization.start);
routes.put("/pulverizations/stop", pulverization.stop);

routes.get("/spray-snapshots", spraySnapshot.list);
routes.get("/spray-snapshots/:id", spraySnapshot.show);
routes.post("/spray-snapshots", spraySnapshot.create);

routes.get("/telemetries/ph-turbidity", telemetry.getPhAndTurbidity);
routes.get("/telemetries/flow-rate", telemetry.getFlowRate);

export default routes;
