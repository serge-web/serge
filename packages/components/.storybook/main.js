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
        });
        config.resolve.extensions.push('.ts', '.tsx');
        return config;
      },
};