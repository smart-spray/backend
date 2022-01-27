import { Router } from "express";

import { HealthController } from "./modules/health/health.controller";
import ProcessGuideController from "./modules/pulverization/process.guide.controller";
import SprayMonitorController from "./modules/spray/spray.controller";

const healthController = new HealthController();
const processGuide = new ProcessGuideController();
const sprayMonitor = new SprayMonitorController();
const routes = Router();

routes.get("/health", healthController.getHealth);
// routes.get("/users");

/**
 * process routes
 */
routes.get("/guide/:processType", processGuide.getProcessGuide);

/**
 * monitor routes
 */
routes.get("/monitor", sprayMonitor.getSprayStatus);

export default routes;
