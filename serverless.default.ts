import { Serverless } from "serverless/aws";

const baseServerlessConfig: Serverless = {
  frameworkVersion: "2",
  service: "default-config",
  variablesResolutionMode: "20210326",

  plugins: [
    "serverless-webpack",
    "serverless-offline",
    "serverless-prune-plugin",
  ],

  disabledDeprecations: ["PROVIDER_IAM_SETTINGS", "CLI_OPTIONS_SCHEMA"],

  custom: {
    stage: "dev",
    region: "us-east-1",
    prune: {
      automatic: true,
      number: 1,
    },
    webpack: {
      packager: "yarn",
      webpackConfig: "./webpack.config.js",
      individually: true,
      includeModules: {
        nodeModulesRelativeDir: "../../",
      },
    },
  },

  provider: {
    lambdaHashingVersion: 20201221,
    name: "aws",
    region: "${self:custom.region}",
    runtime: "nodejs14.x",
    timeout: 10,
    memorySize: 1024,
    logRetentionInDays: 30,
    endpointType: "regional",
    stage: "${self:custom.stage}",

    stackTags: {
      STAGE: "${self:custom.stage}",
    },

    httpApi: {
      cors: true,
      metrics: true,
      useProviderTags: true,
    } as any,

    environment: {
      STAGE: "${self:custom.stage}",
      NODE_OPTIONS: "--enable-source-maps",
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: 1,
    },

    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },

    deploymentBucket: {
      name: "smart-spray-serverless",
      blockPublicAccess: true,
    },

    iam: {},
  },
};

export default baseServerlessConfig;
