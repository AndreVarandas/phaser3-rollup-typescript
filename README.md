> Please note that this package is deprecated! You should use **[https://github.com/phaserjs/create-game](https://github.com/phaserjs/create-game)** instead!

# Phaser 3 TypeScript Starter

[![Header](https://i.imgur.com/6lcIxDs.png)](https://github.com/geocine/phaser3-rollup-typescript#readme)

This is a Phaser 3 starter template that uses TypeScript, Rollup, and offers lightning-fast Hot Module Replacement (HMR) through Vite.

## About this Starter Template

This project is based on [geocine's Phaser 3 TypeScript starter](https://github.com/geocine/phaser3-rollup-typescript), with some additional features and improvements. The goal is to streamline the setup process for new Phaser 3 projects.

Key features included in this template:

- **Husky and lint-staged**: Enforces code checks and formatting during commits.
- **Commitizen and cz-emoji**: Helps create meaningful semantic commit messages.
- **Prettier**: Automatically formats code with sorted imports.
- **Simple CSS Reset**: Provides a basic CSS reset.
- **'~' Alias**: Allows local imports using '~'.

## Available Commands

| Command         | Description                                                  |
| --------------- | ------------------------------------------------------------ |
| `yarn install`  | Install project dependencies                                 |
| `yarn dev`      | Build the project, open a web server, and watch for changes  |
| `yarn build`    | Build the code bundle with production settings               |
| `yarn serve`    | Run a web server to serve the built code bundle              |
| `yarn commit`   | Prepare a commit message using emojis for better readability |
| `yarn lint`     | Check for errors in your code                                |
| `yarn lint:fix` | Fix all fixable eslint errors in your code                   |
| `yarn format`   | Format all files using prettier                              |
| `yarn clean`    | Delete the `dist` folder                                     |

## Development

To get started, clone the repository and run `yarn install` from your project directory. Then, start the local development server with `yarn dev` and navigate to http://localhost:3000 in your browser.

## Production

After running `yarn build`, you'll find the production-ready files in the `dist` folder. To test your code in the `dist` folder, run `yarn serve` and navigate to http://localhost:8080.

## License

This project is licensed under the MIT License. For more details, see the [LICENSE](LICENSE) file.
