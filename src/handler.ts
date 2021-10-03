import { APIGatewayProxyEvent, Context } from "aws-lambda";
import serverless from "serverless-http";

import app from "./app";

export default async (event: APIGatewayProxyEvent, context: Context) => {
  return serverless(app)(event, context);
};
