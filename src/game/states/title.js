import Phaser from 'phaser'
import { Big } from 'config/fonts'

import phaserLogoImg from 'assets/phaser-logo.png'

class TitleState extends Phaser.State {
  preload () {
    this.load.image('phaser-logo', phaserLogoImg)
  }

  create () {
    const { centerX, centerY } = this.game.world

    this.bgImage = this.add.image(centerX, centerY, 'phaser-logo')
    this.bgImage.anchor.set(0.5)
    this.bgImage.alpha = 0.4

    this.titleText = this.add.text(centerX, centerY - 100,
      'Phaser Jam Skeleton',
      Big)
    this.titleText.anchor.set(0.5)
  }

  update () {
    this.bgImage.scale.set(0.8 + (Math.sin(this.time.time * 0.001) * 0.2))
  }
}

export default TitleState
