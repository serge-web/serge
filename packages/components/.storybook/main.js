const path = require('path')

module.exports = {
    stories: [
      '../src/**/*.stories-inc.mdx',
      '../src/**/*.stories-inc.@(tsx)'
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
    ],
    webpackFinal: async config => {
        config.module.rules.push(
        {
          test: /\.(ts|tsx)$/,
            use: [
              {
                loader: require.resolve('ts-loader'),
              },
              // Optional
              {
                loader: require.resolve('react-docgen-typescript-loader'),
                options: {
                  // Provide the path to your tsconfig.json so that your stories can
                  // display types from outside each individual story.
                  tsconfigPath: path.resolve(__dirname, "../tsconfig.json"),
                },
              },
            ]
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

