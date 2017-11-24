import Phaser from 'phaser'

class StartupState extends Phaser.State {
  create () {
    console.log('Startup complete')

    this.state.start('title')
  }
}

export default StartupState
