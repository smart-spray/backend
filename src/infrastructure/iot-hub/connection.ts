import { Client } from "azure-iothub";

import { iotHubConfigOne, iotHubConfigTwo } from "./config";

export const iotHubClientOne = Client.fromConnectionString(
  iotHubConfigOne.connString
);

export const iotHubClientTwo = Client.fromConnectionString(
  iotHubConfigTwo.connString
);
