import { Router } from "express";

import { HealthController } from "./modules/health/health.controller";
import ProcessGuideController from "./modules/pulverization/process.guide.controller";
import SprayController from "./modules/spray/spray.controller";

const healthController = new HealthController();
const processGuide = new ProcessGuideController();
const spray = new SprayController();
const routes = Router();

routes.get("/health", healthController.getHealth);
// routes.get("/users");

/**
 * process routes
 */
routes.get("/guide/:processType", processGuide.getProcessGuide);

/**
 * spray routes
 */
routes.get("/sprays", spray.getSprays);
routes.get("/sprays/:id", spray.getSprayById);
routes.get("/sprays/health/:id", spray.getSprayHealth);

export default routes;
