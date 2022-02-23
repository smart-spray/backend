import { Client } from "azure-iothub";

import { iotHubConfig } from "./config";

export const iotHubClient = Client.fromConnectionString(
  iotHubConfig.connString
);
