import "dotenv/config";

import server from "./app";
import { connectMongo } from "./infrastructure/mongo/connection";

const port = process.env.NODE_ENV === "production" ? 80 : 3333;

server.listen(port, async () => {
  await connectMongo();
  console.log(`🚀 SmartSpray server is running on port ${port}!`);
});
