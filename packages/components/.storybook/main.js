const path = require('path')

module.exports = {
  stories: [
    '../src/**/*.stories-inc.mdx',
    '../src/**/*.stories-inc.@(tsx)'
  ],
  core: {
    builder: "webpack5",
  },

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  webpackFinal: async config => {
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
          options: {
            name: '[name].[ext]'
          }
        }
      ]
    }
    );
    config.resolve.extensions.push('.ts', '.tsx', '.md');
    return config;
  },
};

