import { CosmosClient } from "@azure/cosmos";

import { cosmosConfig } from "./config";

const Client = CosmosClient;

const options = {
  endpoint: cosmosConfig.url,
  key: cosmosConfig.key,
  userAgentSuffix: "CosmosDBJavascriptQuickstart",
};

export const cosmosClient = new Client(options);
