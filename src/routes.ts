import { Router } from "express";

import { HealthController } from "./modules/health/health.controller";
import SprayController from "./modules/spray/spray.controller";

const healthController = new HealthController();
const spray = new SprayController();
const routes = Router();

routes.get("/health", healthController.getHealth);

/**
 * spray routes
 */
routes.get("/sprays", spray.getSprays);
routes.get("/sprays/:id", spray.getSprayById);
routes.get("/sprays/health/:id", spray.getSprayHealth);

export default routes;
