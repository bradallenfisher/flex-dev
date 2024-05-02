const { join, dirname } = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}

module.exports = {
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(jsx|ts|tsx)',
  ],
  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-interactions'),
    getAbsolutePath('@storybook/addon-a11y'),
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5'
  },
  babel: async options => ({
    ...options,
    presets: [
      ...options.presets,
      [
        '@babel/preset-react',
        {
          runtime: 'automatic'
        },
        'preset-react-jsx-transform'
      ]
    ]
  }),

  webpackFinal: async config => {
    // Use correct react-dom depending on React version.

    // Add SCSS support.
    config.plugins.push(new MiniCssExtractPlugin());
    config.module.rules.push({
      test: /\.s[ac]ss$/i,
      oneOf: [
        {
          test: /\.module\.s?css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                modules: {
                  namedExport: true
                }
              }
            },
            {
              loader: require.resolve('css-loader'),
              options: {
                importLoaders: 2,
                esModule: true,
                modules: {
                  auto: undefined,
                  namedExport: true,
                  localIdentName: `[name]--[local]--[hash:base64:5]`,
                  exportLocalsConvention: `dashesOnly`,
                  exportOnlyLocals: false
                }
              }
            },
            {
              loader: require.resolve('postcss-loader'),
              options: {
                implementation: require('postcss'),
                postcssOptions: {
                  plugins: [
                    require('postcss-import'),
                    require('postcss-css-variables')({
                      preserveAtRulesOrder: true
                    }),
                    require('autoprefixer')({ grid: true }),
                    require('postcss-remove-nested-calc')
                  ]
                }
              }
            },
            {
              loader: require.resolve('sass-loader'),
              options: {
                sassOptions: {}
              }
            }
          ]
        },
        {
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              // Don't do css modules for non module files.
              // Setting modules here breaks the color and typography stories.
              options: {}
            },
            {
              loader: require.resolve('css-loader'),
              options: {
                importLoaders: 2,
                esModule: true,
                modules: true
              }
            },
            {
              loader: require.resolve('postcss-loader'),
              options: {
                implementation: require('postcss'),
                postcssOptions: {
                  plugins: [
                    require('postcss-import'),
                    require('postcss-css-variables')({
                      preserveAtRulesOrder: true
                    }),
                    require('autoprefixer')({ grid: true }),
                    require('postcss-remove-nested-calc')
                  ]
                }
              }
            },
            {
              loader: require.resolve('sass-loader'),
              options: {
                sassOptions: {}
              }
            }
          ]
        }
      ]
    });
    config.module.rules.push({
      test: /\.svg$/,
      include: /\.inline\.svg$/,
      use: [require.resolve('svg-react-loader')]
    });

    // Remove core-js to prevent issues with Storybook
    config.module.rules[0].exclude = [/core-js/];
    config.resolve.mainFields = ['browser', 'module', 'main'];
    return config;
  }
};
