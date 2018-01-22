import Phaser from 'phaser'
import { getGame } from 'kit/helpers/gameobj'

/**
 * Helper module for quickly handling multiple input types
 * when prototyping/jamming. Auto-binds WASD and arrow keys for
 * movement, and provides checker methods that will return true
 * if _any_ of the bound controls are in use.
 * (i.e. 'up' will be returned `true` if either W *or* the up arrow
 * are being pressed).
 *
 * TODO: add gamepad support
 * TODO: elegant/friendlier multiplayer support
 * TODO: convert to class/other structure?
 */

export const CTRL_KEYS_ARROWS = 1
export const CTRL_KEYS_WASD = 2
export const CTRL_GAMEPAD = 4 // TODO: not implemented

export const KEY_BINDS_WASD = {
  up: Phaser.Keyboard.W,
  left: Phaser.Keyboard.A,
  down: Phaser.Keyboard.S,
  right: Phaser.Keyboard.D,
}

export const KEY_BINDS_BUTTONS = {
  action1: Phaser.Keyboard.COMMA,
  action2: Phaser.Keyboard.PERIOD,
  back: Phaser.Keyboard.ESC,
  start: Phaser.Keyboard.ENTER,
}

const _engine = {
  game: null,
  inputType: null,
  bindings: {},
  values: {},
  arrows: {},
  keys: {},
}

function init (inst, inputType = CTRL_KEYS_ARROWS | CTRL_KEYS_WASD, customKeys = {}, options = {}) {
  _engine.game = getGame(inst)
  _engine.inputType = inputType

  if (!_engine.inputType) {
    console.warn('ControlsHelper: initialized with no specified inputType')
  }
  if (_engine.inputType & CTRL_GAMEPAD) {
    console.warn('ControlsHelper: gamepad not yet supported by this helper')
  }

  // Init control values object
  _engine.bindings = {
    ...KEY_BINDS_WASD,
    ...KEY_BINDS_BUTTONS,
    ...customKeys,
  }
  _engine.values = {}
  for (let k in _engine.bindings) {
    _engine.values[k] = 0
  }

  // Create and bind keys
  if (_engine.inputType & CTRL_KEYS_ARROWS) {
    _engine.arrows = _engine.game.input.keyboard.createCursorKeys()
  }
  _engine.keys = {}
  if (_engine.inputType & CTRL_KEYS_WASD) {
    for (let k in KEY_BINDS_WASD) {
      _engine.keys[k] = _engine.game.input.keyboard.addKey(_engine.bindings[k])
    }
  }
  if (_engine.inputType & (CTRL_KEYS_ARROWS | CTRL_KEYS_WASD)) {
    for (let k in KEY_BINDS_BUTTONS) {
      _engine.keys[k] = _engine.game.input.keyboard.addKey(_engine.bindings[k])
    }
    for (let k in customKeys) {
      _engine.keys[k] = _engine.game.input.keyboard.addKey(_engine.bindings[k])
    }
  }

  // TODO: handle gamepad
}

function _getKeyValue (k) {
  let v = 0
  if (_engine.inputType & CTRL_KEYS_ARROWS) {
    if (_engine.arrows[k] && _engine.arrows[k].isDown) v = 1
  }
  if (_engine.inputType & (CTRL_KEYS_ARROWS | CTRL_KEYS_WASD)) {
    if (_engine.keys[k] && _engine.keys[k].isDown) v = 1
  }
  return v
}

function isPressed (k) {
  _engine.values[k] = _getKeyValue(k)
  return !!_engine.values[k]
}

function getValue (k) {
  _engine.values[k] = _getKeyValue(k)
  return _getKeyValue(k) | 0
}

function setValue (k, v) {
  _engine.values[k] = v | 0
}

const ControlsHelper = {
  init,
  isPressed,
  getValue,
  setValue,
}

export default ControlsHelper
