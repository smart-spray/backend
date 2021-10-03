const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const sls = require('serverless-webpack');
const path = require('path');

const rootNodeModulesPath = path.resolve(__dirname, '..', 'node_modules');

// plugins
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  target: 'node',
  entry: sls.lib.entries,
  context: sls.lib.serverless.config.servicePath,
  mode: sls.lib.webpack.isLocal ? 'development' : 'production',
  devtool: sls.lib.webpack.isLocal ? 'eval-source-map' : undefined,
  externals: getExternals(),
  resolve: {
    extensions: ['.js', '.ts', '.json'],
    plugins: [new TsconfigPathsPlugin()],
  },
  optimization: {
    minimize: false,
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          transpileOnly: true,
          onlyCompileBundledFiles: true,
        },
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      eslint: {
        files: './src/**/*.{ts,js}',
      },
    }),

    /**
     * Hide warnings for these packages belows, these packages usually have
     * some crazy dynamic requires insider their code, therefore webpack
     * doesn't know exactly what to import
     */
    new webpack.ContextReplacementPlugin(/express/),
    new webpack.ContextReplacementPlugin(/mongoose/),
    new webpack.ContextReplacementPlugin(/mongodb/),
    new webpack.ContextReplacementPlugin(/require_optional/),
    new webpack.ContextReplacementPlugin(/@nestjs/),
    new webpack.ContextReplacementPlugin(/@mikro-orm/),

    /**
     * Ignore some dynamic/lazy require() calls
     */
    new webpack.IgnorePlugin(ignorePluginConfig()),
  ],
};

/**
 * In local development, we exclude the bundling of modules coming from node_modules
 * therefore making the build faster while we are developing, for production we want
 * to bundle everything to making the final output suitable for the lambda size limit.
 *
 * It excludes both local app node_modules and the root node_modules
 */
function getExternals() {
  if (sls.lib.webpack.isLocal) {
    return nodeExternals({
      additionalModuleDirs: [rootNodeModulesPath],
    });
  } else {
    return {
      ...sls.lib.serverless.service.custom.webpack.includeModules.forceExclude,
    }
  }
}

/**
 * There is a small problem with the idea of lazy require() calls,
 * Webpack tries to load these lazy imports that you may not be using,
 * so we must explicitly handle the issue.
 * Refer to: https://github.com/nestjs/nest/issues/1706
 */
function ignorePluginConfig() {
  return {
    checkResource(resource) {
      const lazyImports = [
        'cache-manager',
      ];
      if (!lazyImports.includes(resource)) {
        return false;
      }
      try {
        require.resolve(resource);
      } catch (err) {
        return true;
      }
      return false;
    },
  };
}
