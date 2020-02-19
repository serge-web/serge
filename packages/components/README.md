# Serge Project Component library

This is the primary component library of the serge project. New componets should always be created inside the `local` folder.

It is recommended to use the [`Buildcom`](https://github.com/foxleigh81/buildcom) npm package to ensure consistency in component generation: 

Running this in the Serge project root will generate a 'my-new-component` typescript component in the local folder, with sass-modules already configured as well as an example spec file and an example storybook story.

```bash
npx buildcom -sjt -c "sass" -m --output "packages/components/local" --name "My New Component"
```

This is where our Storybook implementation lives. For those who don't know what storybook is, here is a brief introduction:

[![Storybook intro video on YouTube](https://i.imgur.com/FDvR6zl.jpg)](https://www.youtube.com/watch?v=p-LFh5Y89eM)

## Getting started

In the root of the serge project, ensure that you have installed all packages and dependencies and then run the project:

```bash
yarn install
yarn storybook
```

## Adding stories

Stories are stored in two locations:

This package - The `vendor` directory in this package is where we keep our third party component stories, primarily these come from [Material-UI]() but any component we did not make ourselves will be documented here.

The `local` package - When we need to make a custom component, it will be created here. Each component will have it's own `index.stories.mdx` file which will end up in our Storybook.

## Contributing

If you want to contribute components to the library, please review our [Development Standards Guidelines](../../development-standards.md) first.