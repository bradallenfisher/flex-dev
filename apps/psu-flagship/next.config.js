/** @type {import('next').NextConfig} */

/**
 * Stolen from https://stackoverflow.com/questions/10776600/testing-for-equality-of-regular-expressions
 */
const regexEqual = (x, y) => {
  return (
    x instanceof RegExp &&
    y instanceof RegExp &&
    x.source === y.source &&
    x.global === y.global &&
    x.ignoreCase === y.ignoreCase &&
    x.multiline === y.multiline
  );
};

const loaderUtils = require('loader-utils');

/**
 * Generate context-aware class names when developing locally
 */
const localIdent = (loaderContext, localIdentName, localName, options) => {
  return (
    loaderUtils
      .interpolateName(loaderContext, `[folder]_[name]__${localName}`, options)
      // Webpack name interpolation returns `about_about.module__root` for
      // `.root {}` inside a file named `about/about.module.css`. Let's simplify
      // this.
      .replace(/\.module_/, '_')
      // Replace invalid symbols with underscores instead of escaping
      // https://mathiasbynens.be/notes/css-escapes#identifiers-strings
      .replace(/[^a-zA-Z0-9-_]/g, '_')
      // "they cannot start with a digit, two hyphens, or a hyphen followed by a digit [sic]"
      // https://www.w3.org/TR/CSS21/syndata.html#characters
      .replace(/^(\d|--|-\d)/, '__$1')
  );
};

module.exports = {
  basePath: process.env.NEXT_PUBLIC_PATH_PREFIX
    ? `/${process.env.NEXT_PUBLIC_PATH_PREFIX}`
    : '',
  images: {
    loader: 'custom',
  },
  env: {
    GOOGLE_SERVICE_PRIVATE_KEY: process.env.GOOGLE_SERVICE_PRIVATE_KEY,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  transpilePackages: ['@psu-flex/core-ui'],
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
      config.resolve.fallback.tls = false;
      config.resolve.fallback.net = false;
      config.resolve.fallback.child_process = false;
    }

    config.resolve.fallback = { tls: false, fs: false, child_process: false };

    return config;
  },

  async redirects() {
    return [
      {
        source: '/posts/:path*',
        destination: '/',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        // matching all API routes
        source: '/api/:path*',
        headers: [{ key: 'Access-Control-Allow-Origin', value: '*' }],
      },
    ];
  },
};
