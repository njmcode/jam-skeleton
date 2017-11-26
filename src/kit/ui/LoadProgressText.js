import Phaser from 'phaser'

/**
 * Create a new Text instance that will report the status of assets being
 * loaded, and which will destroy itself when loading is complete.
 *
 * This is a basic loading helper to be used in the preload() methods
 * of Phaser.State instances. It exposes no mechanism to inspect the
 * loading status or callback when complete.
 *
 * @author njmcode
 * @class LoadProgressText
 * @extends Phaser.Text
 * @param {Phaser.Game} game - Current game instance.
 * @param {number} x - X position of the new object.
 * @param {number} y = Y position of the new object.
 * @param {string} labelText - Actual text to display.
 * @param {object} style - Font/type options for the text.
 * @returns {LoadProgressText} This LoadProgressText instance.
 */
class LoadProgressText extends Phaser.Text {
  constructor (game, x, y, labelText = 'Loading...', style) {
    super(game, x, y, '', style)

    this.labelText = labelText
    this.setProgress(0)

    const progressCallback = (progress, cacheKey, success, totalLoaded, totalFiles) => {
      this.setProgress(progress)

      if (totalLoaded === totalFiles) {
        game.load.onFileComplete.remove(progressCallback)
        this.destroy()
      }
    }

    game.load.onFileComplete.add(progressCallback)
  }

  /**
   * Set the displayed % amount.
   *
   * @method LoadProgressText#setProgress
   * @param {integer} percent - % number to display.
   */
  setProgress (percent) {
    this.progressPercent = percent
    this.setText(`${this.labelText} ${this.progressPercent}%`)
  }
}

export default LoadProgressText
