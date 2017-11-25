import { getGame } from 'helpers/gameobj'

/**
 * Load a manifest of assets into the current game.
 * Manifest object should be in the following format:
 *
 * {
 *  assetType: {
 *    'asset-id': [constructorArgsArray]
 *  }
 * }
 *
 * e.g.:
 * {
 *  image: {
 *    'my-image': ['assets/myimage.png']
 *  },
 *  spritesheet: {
 *    'my-sprites': ['assets/ssheet.png', 64, 64]
 *  },
 *  etc.
 * }
 *
 * @author njmcode
 * @function loadAssets
 * @param {Phaser.State|Phaser.Game} inst - Game or state object
 * @param {object} manifest - Nested object of assets to load
 */
export function loadAssets (inst, manifest) {
  const game = getGame(inst)

  for (let assetType in manifest) {
    for (let assetKey in manifest[assetType]) {
      let args = manifest[assetType][assetKey]
      if (!(args instanceof Array)) args = [args]
      game.load[assetType](assetKey, ...args)
    }
  }
}