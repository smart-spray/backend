import { cosmosConfig } from "./config";
import { cosmosClient } from "./connection";

export class CosmosService {
  async readDatabase() {
    try {
      const { resource: databaseDefinition } = await cosmosClient
        .database(cosmosConfig.database.id)
        .read();

      console.log(`Reading database: \n${databaseDefinition.id}\n`);
    } catch (err) {
      console.log({ err });
      return null;
    }
  }

  async readContainer() {
    try {
      const { resource: containerDefinition } = await cosmosClient
        .database(cosmosConfig.database.id)
        .container(cosmosConfig.container.id)
        .read();

      console.log(`Reading container: \n${containerDefinition.id}\n`);

      return await cosmosClient
        .database(cosmosConfig.database.id)
        .container(cosmosConfig.container.id)
        .items.readAll()
        .fetchAll();
    } catch (err) {
      console.log({ err });
      return null;
    }
  }
}
