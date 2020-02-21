const path = require('path')

module.exports = {
    stories: [
        '../src/**/*.stories.(tsx|mdx)',
    ],
    addons: [
        {
          name: '@storybook/preset-typescript',
          options: {
            tsDocgenLoaderOptions: {
              tsconfigPath: path.resolve(__dirname, '../tsconfig.json'),
            },
            include: [path.resolve(__dirname)],
          },
        },
        {
            name: '@storybook/addon-docs',
            options: {
                configureJSX: true,
                babelOptions: {},
                sourceLoaderOptions: null
            }
        },
        '@storybook/addon-knobs/register',
        '@storybook/addon-actions/register',
        '@storybook/addon-viewport/register',
        '@storybook/addon-backgrounds/register',
        'storybook-readme/register'
    ],
    webpackFinal: async config => {
        config.module.rules.push(
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