import Phaser from 'phaser'
import { RegularStyle, TitleStyle } from 'config/fonts'
import STRINGS from 'config/strings'
import phaserLogoImg from 'assets/phaser-logo.png'
import ClickableText from 'ui/clicktext'

class TitleState extends Phaser.State {
  preload () {
    this.load.image('phaser-logo', phaserLogoImg)
  }

  create () {
    const { centerX, centerY } = this.game.world

    // Phaser logo
    this.bgImage = this.add.image(centerX, centerY, 'phaser-logo')
    this.bgImage.anchor.set(0.5)
    this.bgImage.alpha = 0.4

    // Big text
    this.titleText = this.add.text(centerX, centerY - 100,
      STRINGS['title.mainTitle'],
      {...TitleStyle, fill: 'cyan'})
    this.titleText.anchor.set(0.5)

    // Small text
    this.bodyText = this.add.text(centerX, centerY + 100,
      STRINGS['title.body'],
      RegularStyle)
    this.bodyText.anchor.set(0.5)

    // Play button
    this.playButton = new ClickableText(this, centerX, centerY + 200,
      STRINGS['title.cta'],
      {...TitleStyle, fill: 'yellow'},
      () => this.state.start('play'))
    this.playButton.anchor.set(0.5)
    this.add.existing(this.playButton)
  }

  update () {
    // Scale logo and play button up and down
    const ti = this.time.time * 0.001
    this.bgImage.scale.set(0.9 + (Math.sin(ti) * 0.1))
    this.playButton.scale.set(0.9 + (Math.sin(ti * 8) * 0.1))
  }
}

export default TitleState
