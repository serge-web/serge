const path = require('path');

module.exports = {
  stories: [
    '../src/**/*.stories.tsx'
  ],
  staticDirs: ['../static'],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preview-api',
    '@storybook/addon-controls',
    '@storybook/preset-scss',
    '@storybook/addon-webpack5-compiler-swc',
    '@chromatic-com/storybook'
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
    config.resolve.alias['src'] = path.resolve(__dirname, '../src');
    config.resolve.extensions.push('.ts', '.tsx', '.md');
    return config;
  },

  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },

  docs: {
    autodocs: true
  },
};

