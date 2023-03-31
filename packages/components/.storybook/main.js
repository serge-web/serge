const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')

const maxAssetSize = 1024 * 1024

module.exports = {
  stories: [
    '../src/**/*.stories-inc.mdx',
    '../src/**/*.stories-inc.@(tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  webpackFinal: async config => {
    config.optimization = {
      ...config.optimization,
      minimize: true,
      minimizer: [
        new TerserPlugin({
          parallel: true // https://webpack.js.org/plugins/terser-webpack-plugin/#parallel
        })
      ],
      splitChunks: {
        ...config.optimization.splitChunks,
        minSize: 30 * 1024,
        maxSize: maxAssetSize // tells webpack to try to split chunks bigger than maxSize bytes into smaller parts. Parts will be at least minSize
      }
    }
    config.performance = {
      ...config.performance,
      maxAssetSize
    }
    /**
     * don't need to include the source map in production mode
     * https://webpack.js.org/configuration/devtool/
     * Recommended choice for production builds with maximum performance.
     */
    config.devtool = config.mode === 'production' ? '' : 'eval-source-map'
    config.module.rules.push(
    {
      test: /\.(js|jsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [
          '@babel/preset-env',
          '@babel/preset-react',
        ],
        plugins: [
          '@babel/plugin-proposal-nullish-coalescing-operator',
        ],
      },
    },
    {
      test: /\.md$/,
      use: [
        {
          loader: 'markdown-loader',
        }
      ]
    },
    {
      test: /\.(png|jpe?g|gif)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            outputPath: 'static/assets/',
            publicPath: 'static/assets/'
          }
        },
      ],
    },
    {
      test: /\.module.scss$/,
      use: [
        require.resolve('style-loader'),
        {
          loader: 'css-modules-typescript-loader',
          options: {
            mode: process.env.CI ? 'verify' : 'emit'
          }
        },
        {
          loader: require.resolve('css-loader'),
          options: {
            importLoaders: 1,
            modules: {
              localIdentName: 'c-[hash:base64:5]__[folder]--[local]'
            }
          }
          },
          {
            loader: require.resolve('sass-loader'),
            options: {
            // Prefer `dart-sass`
            implementation: require('sass'),
          }
        }
      ],
      include: path.resolve(__dirname, '../'),
    },
    {
      test: /\.(woff|woff2|eot|ttf)$/,
      use: [
        {
          loader: 'file-loader',
          query: {
            name: '[name].[ext]'
          }
        }
      ]
    });
    config.resolve.extensions.push('.ts', '.tsx', '.md');
    return config;
  },
};

