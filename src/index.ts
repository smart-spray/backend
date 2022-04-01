import "dotenv/config";

import server from "./app";
import { connectMongo } from "./infrastructure/mongo/connection";

const port = process.env.PORT || 3334;

server.listen(port, async () => {
  await connectMongo();
  console.log(`🚀 SmartSpray server is running on port ${port}!`);
});
