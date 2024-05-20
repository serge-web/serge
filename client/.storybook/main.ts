import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.tsx"],
  staticDirs: ["../static"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preview-api",
    "@storybook/addon-controls",
    "@storybook/addon-webpack5-compiler-swc",
    "@chromatic-com/storybook",
  ],
  webpackFinal: async (config) => {
    if (!config.module || !config.module.rules || !config.resolve || !config.resolve.alias || !config.resolve.extensions) {
      return config
    }
    config.module.rules.push(
      {
        test: /\.(js|jsx)$/,
        loader: require.resolve("babel-loader"),
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: ["@babel/plugin-proposal-nullish-coalescing-operator"],
        },
      },
      {
        test: /\.module.scss$/,
        use: [
          require.resolve("style-loader"),
          {
            loader: "css-modules-typescript-loader",
            options: {
              mode: process.env.CI ? "verify" : "emit",
            },
          },
          {
            loader: require.resolve("css-loader"),
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: "c-[hash:base64:5]__[folder]--[local]",
              },
            },
          },
          {
            loader: require.resolve("sass-loader"),
            options: {
              // Prefer `dart-sass`
              implementation: require("sass"),
            },
          },
        ],
        include: path.resolve(__dirname, "../"),
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "static/assets/",
              publicPath: "static/assets/",
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
            },
          },
        ],
      }
    );
    config.resolve.alias['src'] = path.resolve(__dirname, "../src")
    config.resolve.extensions.push(".ts", ".tsx", ".md");
    return config;
  },
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: true,
  },
};

export default config;