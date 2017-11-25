import Phaser from 'phaser'
import { RegularStyle, TitleStyle } from 'config/fonts'
import STRINGS from 'config/strings'
import phaserLogoImg from 'assets/phaser-logo.png'
import ClickableText from 'ui/ClickableText'
import { addTo } from 'helpers/gameobj'
import { loadAssets } from 'helpers/loading'

class TitleState extends Phaser.State {
  preload () {
    loadAssets(this, {
      image: {
        'phaser-logo': phaserLogoImg,
      },
    })
  }

  create () {
    const { centerX: cx, centerY: cy } = this.game.world

    // Phaser logo
    this.bgImage = addTo(this, Phaser.Image, cx, cy, 'phaser-logo')
    this.bgImage.alpha = 0.4

    // Big text
    this.titleText = addTo(this, Phaser.Text, cx, cy - 100,
      STRINGS['title.mainTitle'],
      {...TitleStyle, fill: 'cyan'})

    // Small text
    this.bodyText = addTo(this, Phaser.Text, cx, cy + 100,
      STRINGS['title.body'],
      RegularStyle)

    // Play button
    this.playButton = addTo(this, ClickableText, cx, cy + 200,
      STRINGS['title.cta'], 
      {...TitleStyle, fill: 'yellow'},
      () => this.state.start('play'))
  }

  update () {
    // Scale logo and play button up and down
    const ti = this.time.time * 0.001
    this.bgImage.scale.set(0.9 + (Math.sin(ti) * 0.1))
    this.playButton.scale.set(0.9 + (Math.sin(ti * 8) * 0.1))
  }
}

export default TitleState
