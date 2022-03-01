export const cosmosConfig = {
  url: "https://cosmodb-ftt.documents.azure.com:443/",
  key: "7SOec0SAHtcWrr1iX0Ibcn61gHGB8ybESWjpeo91om6jS6Tvwy7hxibFtqp0gCha5qxUw00mOJh0PyVnwNdL1A==",
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
