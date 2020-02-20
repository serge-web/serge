const path = require('path')

module.exports = {
    stories: [
        '../src/**/*.stories.mdx',
    ],
    addons: [
        '@storybook/addon-knobs/register',
        '@storybook/addon-actions/register',
        '@storybook/addon-storysource',
        '@storybook/addon-viewport/register',
        '@storybook/addon-backgrounds/register',
        {
            name: '@storybook/addon-docs',
            options: {
                configureJSX: true,
                babelOptions: {},
                sourceLoaderOptions: null
            }
        }
    ],
    webpackFinal: async config => {
        config.module.rules.push({
          test: /\.(ts|tsx)$/,
          use: [
            {
              loader: require.resolve('ts-loader'),
            },
            {
              loader: require.resolve('react-docgen-typescript-loader'),
            },
          ],
        },
        {
          test: /\.module.scss$/,
          use: [
                require.resolve('style-loader'), 
                require.resolve('css-modules-typescript-loader'),
                { 
                  loader: require.resolve('css-loader'),
                  options: {
                    importLoaders: 1,
                    modules: {
                      localIdentName: 'c-[hash:base64:5]__[folder]--[local]'
                    }
                  }
                 },
                 require.resolve('sass-loader')
                ],
                include: path.resolve(__dirname, '../'),
        });
        config.resolve.extensions.push('.ts', '.tsx');
        return config;
      },
};