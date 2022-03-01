import sls from "./serverless.default";

sls.service = "smart-spray-backend";

sls.provider.environment = {
  STAGE: "${self:custom.stage}",
  AWS_NODEJS_CONNECTION_REUSE_ENABLED: 1,
};

sls.functions = {
  default: {
    handler: "src/handler.default",
    events: [
      { httpApi: { method: "get", path: "/health" } },
      { httpApi: { method: "get", path: "/sprays" } },
      { httpApi: { method: "post", path: "/sprays" } },
      { httpApi: { method: "get", path: "/sprays/{id}" } },
      { httpApi: { method: "get", path: "/sensorData" } },
      { httpApi: { method: "get", path: "/spray-status-snapshots" } },
      { httpApi: { method: "post", path: "/spray-status-snapshots" } },
      { httpApi: { method: "get", path: "/spray-status-snapshots/{id}" } },
      { httpApi: { method: "get", path: "/pulverizations" } },
      { httpApi: { method: "get", path: "/pulverizations/{id}" } },
      { httpApi: { method: "post", path: "/pulverizations" } },
      { httpApi: { method: "get", path: "/pulverizations/message/{message}" } },
    ],
  },
};

module.exports = sls;
