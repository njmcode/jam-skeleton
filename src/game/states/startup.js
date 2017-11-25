import Phaser from 'phaser'

class StartupState extends Phaser.State {
  create () {
    // TODO: add debug URL state targetting

    this.state.start('title')
  }
}

export default StartupState
