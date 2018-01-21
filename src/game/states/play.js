import Phaser from 'phaser'
import { TitleStyle } from 'config/fonts'
import STRINGS from 'config/strings'

import { addTo } from 'kit/helpers/gameobj'
import Placeholder from 'kit/actors/Placeholder'

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

    // Actor 1
    this.actor1 = addTo(this, Placeholder,
      cx - 200, cy,
      'rect', 50, 100,
      0x00ff00,
      '1'
    )

    this.actor2 = addTo(this, Placeholder,
      cx + 100, cy,
      'circle', 100, 100,
      0x112233,
      '2'
    )

    this.actor3 = addTo(this, Placeholder,
      cx, cy + 20,
      'triangle', 60, 90,
      0xffccdd,
      '3'
    )
  }

  update () {

  }
}

export default PlayState
