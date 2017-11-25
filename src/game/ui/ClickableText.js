import Phaser from 'phaser'

/**
 * Create a new clickable Button with an attached Text object as a label.
 *
 * @author njmcode
 * @class ClickableText
 * @extends Phaser.Button
 * @param {Phaser.Game} game - Current game instance.
 * @param {number} x - X position of the new object.
 * @param {number} y - Y position of the new object.
 * @param {string} labelText - Actual text to display.
 * @param {object} style - Font/type options for the text.
 * @param {function} onClickFn - Callback for when the button is clicked.
 * @param {object|function} ctx - Execution context to bind onClickFn to.
 * @returns {ClickableText} This ClickableText instance.
 */
class ClickableText extends Phaser.Button {
  constructor (game, x, y, labelText, style = {} , onClickFn, ctx) {
    super(game, x, y, null, onClickFn, ctx)

    this.text = new Phaser.Text(game, 0, 0, labelText, style)
    this.text.anchor.set(0.5)
    this.addChild(this.text)
  }
}

export default ClickableText
