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
 * @param {Phaser.Game} game - Current game or state object.
 * @param {number} x - x position of actor instance
 * @param {number} y - y position of actor instance
 * @param {string} shape - shape of placeholder (defaults to rectangle)
 * @param {number} width - width of actor instance (defaults to 100px)
 * @param {number} height - height of actor instance (defaults to width)
 * @param {string} color - color of placeholder (defaults to blue)
 * @param {string} label - label to show on placeholder (defaults to empty string)
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
      switch (shape) {
        case PH_CIRCLE:
        case PH_ELLIPSE:
          gfx.drawEllipse(width * 0.5, height * 0.5, width * 0.5, height * 0.5)
          break
        case PH_TRIANGLE:
          gfx.drawPolygon(
            0, height,
            width * 0.5, 0,
            width, height)
          break
        case PH_RECT:
        default:
          gfx.drawRect(0, 0, width, height)
          break
      }
      gfx.endFill()

      const tex = gfx.generateTexture()
      game.cache.addImage(imgKey, null, tex.baseTexture.source)
      this.loadTexture(imgKey)
      gfx.destroy()

      const gfxRGB = Phaser.Color.getRGB(color)
      const gfxGrayVal = ['r', 'g', 'b'].reduce((acc, k) => {
        return acc + parseInt(gfxRGB[k])
      }, 0) / 3

      this.placeholderLabel = new Phaser.Text(game, 0, 0, label, {
        font: '12px sans-serif',
        fill: (gfxGrayVal < 80) ? 'white' : 'black',
        align: 'center',
      })
      this.placeholderLabel.anchor.set(0.5)
      this.addChild(this.placeholderLabel)
    }
  }
}

export default Placeholder
