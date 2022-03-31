import "dotenv/config";
import { connectMongo } from "./infrastructure/mongo/connection";
import { httpServer } from "./socket";

const port = process.env.PORT || 3333;

httpServer.listen(port, async () => {
  await connectMongo();
  console.log(`🚀 SmartSpray server is running on port ${port}`);
});
