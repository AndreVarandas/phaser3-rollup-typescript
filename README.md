<h1 align="center">
  <br>
  <a href="https://github.com/geocine/phaser3-rollup-typescript#readme"><img src="https://i.imgur.com/6lcIxDs.png" alt="header" width="600"/></a>
  <br>
  Phaser 3 TypeScript Starter
  <br>
</h1>

This is a [Phaser 3](https://github.com/photonstorm/phaser) starter with [TypeScript](https://www.typescriptlang.org/), [Rollup](https://rollupjs.org) with ⚡️ lightning fast HMR through [Vite](https://vitejs.dev/).

## About this starter template

This is a copy or fork of [https://github.com/geocine/phaser3-rollup-typescript](https://github.com/geocine/phaser3-rollup-typescript) - the original Phaser 3 TypeScript starter.

There was some tools missing for me. I had to be setting up all the time I wanted to roll a new Phaser3 project, so I decided to build a new template from this starter.

Things I use that were included:

- Husky and lint-staged to run some checks and format code during commits.
- Commitizen and cz-emoji to build proper semantic commit messages.
- Prettier as a code formatter, with automatic import sort.
- Added a simple css reset.
- Aliased '~' for local imports.

## Available Commands

| Command         | Description                                              |
| --------------- | -------------------------------------------------------- |
| `yarn install`  | Install project dependencies                             |
| `yarn dev`      | Builds project and open web server, watching for changes |
| `yarn build`    | Builds code bundle with production settings              |
| `yarn serve`    | Run a web server to serve built code bundle              |
| `yarn commit`   | Prepares a commit message using cool emojis              |
| `yarn lint`     | Checks for errors in your code                           |
| `yarn lint:fix` | Fixes all fixable eslint errors in your code             |
| `yarn format`   | Formats all the files using prettier                     |
| `yarn clean`    | Deletes the dist folder                                  |

## Development

After cloning the repo, run `yarn install` from your project directory. Then, you can start the local development
server by running `yarn dev` and navigate to http://localhost:3000.

## Production

After running `yarn build`, the files you need for production will be on the `dist` folder. To test code on your `dist` folder, run `yarn serve` and navigate to http://localhost:5000
