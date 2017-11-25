import Phaser from 'phaser'

/**
 * Return the current game instance from the given object.
 *
 * @author njmcode
 * @function _getGame
 * @private
 * @param {Phaser.State|Phaser.GameObject} inst - Current game/state instance.
 * @returns {Phaser.Game} The current game instance.
 */
function _getGame (inst) {
  let game
  if (inst instanceof Phaser.State) {
    game = inst.game
  } else if (inst instanceof Phaser.Game) {
    game = inst
  }
  return game
}

/**
 * Factory function to add a game object with its anchor set at center.
 *
 * @author njmcode
 * @function addTo
 * @param {Phaser.State|Phaser.Game} inst - Current game or state object.
 * @param {Phaser.GameObject} ObjClass - Class of object to create.
 * @param {mixed} args - Arguments to be passed to ObjClass constructor.
 * @return {Phaser.GameObject} The created ObjClass instance.
 */
export const addTo = (inst, ObjClass, ...args) => {
  const newObj = new ObjClass(_getGame(inst), ...args)
  newObj.anchor.set(0.5)
  inst.add.existing(newObj)
  return newObj
}
