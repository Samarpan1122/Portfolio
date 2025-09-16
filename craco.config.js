// Load configuration from environment or config file
const path = require("path");

// Environment variable overrides
const config = {
  disableHotReload: process.env.DISABLE_HOT_RELOAD === "true",
};

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    configure: (webpackConfig) => {
      // Add React 19 polyfill for React 18
      webpackConfig.resolve.alias = {
        ...webpackConfig.resolve.alias,
        'react/experimental': 'react',
      };

      // Add a polyfill for React 19 features
      webpackConfig.resolve.fallback = {
        ...webpackConfig.resolve.fallback,
      };

      // Suppress source map warnings for MediaPipe packages
      webpackConfig.ignoreWarnings = [
        {
          module: /vision_bundle\.mjs$/,
          message: /Failed to parse source map/,
        },
        {
          module: /@mediapipe/,
          message: /Failed to parse source map/,
        },
      ];

      // Disable hot reload completely if environment variable is set
      if (config.disableHotReload) {
        // Remove hot reload related plugins
        webpackConfig.plugins = webpackConfig.plugins.filter((plugin) => {
          return !(plugin.constructor.name === "HotModuleReplacementPlugin");
        });

        // Disable watch mode
        webpackConfig.watch = false;
        webpackConfig.watchOptions = {
          ignored: /.*/, // Ignore all files
        };
      } else {
        // Add ignored patterns to reduce watched directories
        webpackConfig.watchOptions = {
          ...webpackConfig.watchOptions,
          ignored: [
            "**/node_modules/**",
            "**/.git/**",
            "**/build/**",
            "**/dist/**",
            "**/coverage/**",
            "**/public/**",
          ],
        };
      }

      return webpackConfig;
    },
  },
};
