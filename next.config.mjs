import { createRequire } from 'module';
const require = createRequire(import.meta.url);

export default {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Ensure fallback for Node.js core modules like "buffer"
    if (!config.resolve.fallback) {
      config.resolve.fallback = {};
    }
    config.resolve.fallback.buffer = require.resolve('buffer/');

    // Add ProvidePlugin to inject the polyfill where "Buffer" or "process" is used
    config.plugins.push(
      new webpack.ProvidePlugin({
        Buffer: ['buffer', 'Buffer'],
      }),
    );

    return config;
  },
};