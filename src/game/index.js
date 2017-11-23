import Phaser from 'phaser'
import CFG from './config'
import stateMap from './states'

const { width, height } = CFG.stage

const game = new Phaser.Game(
  width, height, Phaser.AUTO
)
for (let k in stateMap) {
  console.info('Adding state: ', k)
  game.state.add(k, stateMap[k])
}
game.state.start('startup')

export default game
