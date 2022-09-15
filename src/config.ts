import Phaser from 'phaser'

/**
 * The configuration for the Phaser game.
 *
 * @see https://photonstorm.github.io/phaser3-docs/Phaser.Types.Core.html#.GameConfig
 */
export const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  parent: 'game',
  backgroundColor: '#33A5E7',
  scale: {
    width: 800,
    height: 600,
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
}
