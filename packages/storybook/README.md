# Serge Project Storybook package

This is where our Storybook implementation lives. For those who don't know what storybook is, here is a brief introduction:

[![Storybook intro video on YouTube](https://i.imgur.com/FDvR6zl.jpg)](https://www.youtube.com/watch?v=LFh5Y89eM)

## Getting started

In the root of the serge project, ensure that you have installed all packages and dependencies and then run the project:

```bash
yarn install
yarn storybook
```

## Adding stories

Stories are stored in two locations:

This package - The `src` directory in this package is where we keep our third party component stories, primarily these come from [Material-UI]() but any component we did not make ourselves will be documented here.

The `components` package - When we need to make a custom component, it will be created here. Each component will have it's own `index.stories.ts` file which will end up in our Storybook.

## Contributing

If you want to contribute components to the library, please review our [Development Standards Guidelines](../../development-standards.md) first.