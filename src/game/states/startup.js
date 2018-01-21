import Phaser from 'phaser'
import stateMap from 'states'
import ControlsHelper from 'kit/helpers/controls'

class StartupState extends Phaser.State {
  preload () {

  }

  create () {
    /*
     * Boot logic goes here
     */
    ControlsHelper.init(this)
    this.doNextState()
  }

  /**
   * Go to the next state, checking the URL hash
   * and using that as the next state if present.
   */
  doNextState () {
    let nextState = 'title'
    if (window.location.hash) {
      const targetState = window.location.hash.substr(1)
      if (targetState in stateMap) nextState = targetState
    }
    this.state.start(nextState)
  }
}

export default StartupState
