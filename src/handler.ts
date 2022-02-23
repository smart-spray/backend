import { APIGatewayProxyEvent, Context } from "aws-lambda";
import serverless from "serverless-http";

import app from "./app";
import { connectMongo } from "./infrastructure/mongo/connection";

export default async (event: APIGatewayProxyEvent, context: Context) => {
  await connectMongo();
  return serverless(app)(event, context);
};
