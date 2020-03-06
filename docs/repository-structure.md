[🏠 Docsite home](./index.md)

# Repository structure

The Serge project is a monorepo, we use Yarn Workspaces for our monorepo needs but that is augmented by it's coexistence with Lerna.

## 📂 Directory Structure

Our Directory structure is based on the directory structure recommended by Lerna and looks like this. All packages are found in the `/packages` folder.

## 📦 Packages

Packages can be thought of as standalone apps, however, they can also talk to other packages inside the monorepo. For the most part, we will not be creating new packages, however, where it is appropriate, new packages can be made. Each package should be named in `snake_case` syntax and must contain at a minimum a `package.json` file and a `README.md` file which has been completed to a good standard ([see here](https://www.makeareadme.com/) for more information). 