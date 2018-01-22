import Phaser from 'phaser'

export const PH_RECT = 'rect'
export const PH_CIRCLE = 'circle'
export const PH_ELLIPSE = 'ellipse'
export const PH_TRIANGLE = 'triangle'

/**
 * A placeholder actor class for prototyping.
 *
 * @author njmcode
 * @class Placeholder
 * @extends Phaser.Sprite
 * @param {Phaser.Game} game - Current game object.
 * @param {number} x - X position of actor instance
 * @param {number} y - Y position of actor instance
 * @param {string} shape - Shape of placeholder (defaults to rectangle)
 * @param {number} width - Width of actor instance (defaults to 100px)
 * @param {number} height - Height of actor instance (defaults to width)
 * @param {number} color - Color of placeholder (defaults to blue)
 * @param {string} label - Label to show on placeholder (defaults to empty string)
 * @return {Phaser.GameObject} The created placeholder object.
 */
class Placeholder extends Phaser.Sprite {
  constructor (game, x, y, shape = PH_RECT, width = 100, height = width, color = 0x0000ff, label = '') {
    super(game, x, y, '')

    const imgKey = `placeholder__${shape}__${width}__${height}__${color}`

    if (game.cache.checkImageKey(imgKey)) {
      this.loadTexture(imgKey)
    } else {
      const gfx = new Phaser.Graphics(game, 0, 0)
      gfx.boundsPadding = 0

      gfx.beginFill(color)

      // Need to draw these shapes with 90deg of rotation,
      // as that is the default 0-angle for Phaser GameObjects
      switch (shape) {
        case PH_CIRCLE:
        case PH_ELLIPSE:
          gfx.drawEllipse(height * 0.5, width * 0.5, height * 0.5, width * 0.5)
          break
        case PH_TRIANGLE:
          gfx.drawPolygon(
            0, 0,
            height, width * 0.5,
            0, width)
          break
        case PH_RECT:
        default:
          gfx.drawRect(0, 0, height, width)
          break
      }
      gfx.endFill()

      const tex = gfx.generateTexture()
      game.cache.addImage(imgKey, null, tex.baseTexture.source)
      this.loadTexture(imgKey)
      gfx.destroy()

      this.placeholderLabel = new Phaser.Text(game, 0, 0, label, {
        font: '12px sans-serif',
        fill: 'white',
        stroke: 'black',
        strokeThickness: 2,
        align: 'center',
        wordWrap: true,
        wordWrapWidth: width,
      })
      this.placeholderLabel.anchor.set(0.5)
      this.placeholderLabel.angle = 20
      this.addChild(this.placeholderLabel)
    }
  }
}

export default Placeholder
