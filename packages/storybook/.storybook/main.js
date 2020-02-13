module.exports = {
    // Look for stories both in the components package and also in the `src` folder of this package
    stories: [
        '../../components/**/*.stories.mdx',
        '../src/**/*.stories.mdx'
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
    ]
};