import Phaser from 'phaser'

import { config } from '~/config'
import GameScene from '~/scenes/Game'

/**
 * The main game instance.
 *
 * @see https://photonstorm.github.io/phaser3-docs/Phaser.Game.html
 */
new Phaser.Game(
  Object.assign(config, {
    scene: [GameScene],
  }),
)
