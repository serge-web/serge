const path = require('path')

module.exports = {
    stories: [
        '../src/**/*.stories.(tsx|mdx)',
    ],
    addons: [
        '@storybook/addon-knobs/register',
        '@storybook/addon-viewport/register',
        '@storybook/addon-backgrounds/register',
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
        });
        config.resolve.extensions.push('.ts', '.tsx', '.md');
        return config;
      },
};