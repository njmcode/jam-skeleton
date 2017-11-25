import Phaser from 'phaser'

class ClickableText extends Phaser.Button {
  constructor (game, x, y, labelText, style, onClickFn, ctx) {
    super(game, x, y, null, onClickFn, ctx)

    this.text = new Phaser.Text(game, 0, 0, labelText, style)
    this.text.anchor.set(0.5)
    this.addChild(this.text)
  }

  setText (newText) {
    this.text.setText(newText)
  }
}

export default ClickableText
