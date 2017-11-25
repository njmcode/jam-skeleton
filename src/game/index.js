import Phaser from 'phaser'
import CFG from './config'
import stateMap from './states'

const { width, height } = CFG.stage

document.getElementById('game-wrap').innerHTML = ''

const game = new Phaser.Game(
  width, height, Phaser.AUTO, 'game-wrap'
)
for (let k in stateMap) {
  game.state.add(k, stateMap[k])
}
game.state.start('startup')

export default game
