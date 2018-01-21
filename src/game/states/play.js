import Phaser from 'phaser'
import { TitleStyle } from 'config/fonts'
import STRINGS from 'config/strings'

import { addTo } from 'kit/helpers/gameobj'
import Placeholder from 'kit/actors/Placeholder'
import ControlsHelper from 'kit/helpers/controls'

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
      'wall'
    )

    this.actor2 = addTo(this, Placeholder,
      cx + 100, cy,
      'circle', 100, 100,
      0x112233,
      'planet'
    )

    this.actor3 = addTo(this, Placeholder,
      cx, cy + 20,
      'triangle', 60, 90,
      0xffccdd,
      'ship'
    )
    this.physics.enable(this.actor3, Phaser.Physics.ARCADE)
    this.actor3.speed = 0
    this.actor3.body.drag.set(0.3)
    this.actor3.body.maxVelocity.set(200)
    this.actor3.body.collideWorldBounds = true
  }

  update () {
    if (ControlsHelper.isPressed('up')) {
      this.physics.arcade.velocityFromRotation(this.actor3.rotation, 200, this.actor3.body.velocity)
    } else {
      this.actor3.body.velocity.set(0)
    }
    if (ControlsHelper.isPressed('left')) {
      this.actor3.angle -= 4
    }
    if (ControlsHelper.isPressed('right')) {
      this.actor3.angle += 4
    }
  }

  render () {
    this.game.debug.inputInfo(10, 20)
  }
}

export default PlayState
