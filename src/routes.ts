import { Router } from "express";

import ProcessGuideController from "./modules/api/process.guide.controller";
import SprayMonitorController from "./modules/api/spray.monitor.controller";
import { HealthController } from "./modules/health/health.controller";

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
