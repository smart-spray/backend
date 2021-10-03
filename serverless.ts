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
      { httpApi: { method: "get", path: "/users" } },
      // { httpApi: { method: "post", path: "/users" } }
    ],
  },
};

module.exports = sls;
