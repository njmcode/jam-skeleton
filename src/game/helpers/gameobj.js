import Phaser from 'phaser'

function _getGame (inst) {
  let game
  if (inst instanceof Phaser.State) {
    game = inst.game
  } else if (inst instanceof Phaser.Game) {
    game = inst
  }
  return game
}

// Factory method to create a new instance of ObjClass
// (should inherit from Phaser.GameObject or subclasses),
// add it to inst (should be a Phaser.State or Game instance),
// set its anchor to center, and return it.
export const addTo = (inst, ObjClass, ...args) => {
  const newObj = new ObjClass(_getGame(inst), ...args)
  newObj.anchor.set(0.5)
  inst.add.existing(newObj)
  return newObj
}
