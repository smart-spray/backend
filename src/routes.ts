import { Router } from "express";

import { HealthController } from "./modules/health/health.controller";

const healthController = new HealthController();
const routes = Router();

routes.get("/health", healthController.getHealth);
// routes.get("/users");

export default routes;
