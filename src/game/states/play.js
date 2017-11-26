import Phaser from 'phaser'
import { TitleStyle } from 'config/fonts'
import STRINGS from 'config/strings'

import { addTo } from 'kit/helpers/gameobj'

class PlayState extends Phaser.State {
  preload () {

  }

  create () {
    const { centerX: cx, centerY: cy } = this.game.world

    // Placeholder text
    this.titleText = addTo(this, Phaser.Text,
      cx, cy - 100,
      STRINGS['play.placeholder'],
      {...TitleStyle, fill: '#555'})
  }

  update () {

  }
}

export default PlayState
