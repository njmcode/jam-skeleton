import Phaser from 'phaser'

class ClickableText extends Phaser.Button {
  constructor (state, x, y, labelText, style, onClickFn, ctx = state) {
    super(state.game, x, y, null, onClickFn, ctx)

    this.text = new Phaser.Text(state.game, 0, 0, labelText, style)
    this.text.anchor.set(0.5)
    this.addChild(this.text)
  }

  setText (newText) {
    this.text.setText(newText)
  }
}

export default ClickableText
