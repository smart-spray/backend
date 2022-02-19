import { Router } from "express";

import { HealthController } from "./modules/health/health.controller";
import PulverizationController from "./modules/pulverization/pulverization.controller";
import SprayController from "./modules/spray/spray.controller";

const healthController = new HealthController();
const spray = new SprayController();
const pulverization = new PulverizationController();
const routes = Router();

routes.get("/health", healthController.getHealth);

/**
 * spray routes
 */
routes.get("/sprays", spray.getSprays);
routes.get("/sprays/:id", spray.getSprayById);
routes.get("/sprays/health/:id", spray.getSprayHealth);
routes.get("/sensorData", spray.getSensorData);

/**
 * pulverization routes
 */
routes.get("/pulverizations", pulverization.listAllPulverization);
routes.get("/pulverizations/:id", pulverization.getPulverization);
routes.post("/pulverizations", pulverization.savePulverization);

export default routes;
