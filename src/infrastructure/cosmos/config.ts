export const cosmosConfig = {
  url: process.env.COSMOS_URL,
  key: process.env.COSMOS_KEY,
  partitionKey: {
    kind: "Hash",
    paths: ["/partitionKey"],
  },
  database: {
    id: "FlowSensor",
  },
  container: {
    id: "Items",
  },
};
