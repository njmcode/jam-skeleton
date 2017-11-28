import Phaser from 'phaser'

/**
 * Return the current game instance from the given object.
 *
 * @author njmcode
 * @function getGame
 * @param {Phaser.State|Phaser.Game} inst - Current game/state instance.
 * @returns {Phaser.Game} The current game instance.
 */
export function getGame (inst) {
  let game
  if (inst instanceof Phaser.State) {
    game = inst.game
  } else if (inst instanceof Phaser.Game) {
    game = inst
  } else {
    throw new Error('getGame: must pass instance of State or Game')
  }
  return game
}

/**
 * Factory function to add a game object with its anchor set at center.
 *
 * @author njmcode
 * @function addTo
 * @param {Phaser.State|Phaser.Game} inst - Current game or state object.
 * @param {Phaser.GameObject} ObjClass - Class of object to create (e.g. Phaser.Sprite).
 * @param {mixed} args - Arguments to be passed to ObjClass constructor (e.g. game, x, y, etc).
 * @return {Phaser.GameObject} The created ObjClass instance.
 */
export function addTo (inst, ObjClass, ...args) {
  const newObj = new ObjClass(getGame(inst), ...args)
  newObj.anchor.set(0.5)
  inst.add.existing(newObj)
  return newObj
}
