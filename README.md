# jam-skeleton

A (currently Phaser-based) skeleton project for game jam entries.

## Overview

 * Webpack + Babel setup for ES modules with import/export, ES6 features etc
 * webpack-dev-server with live reload
 * Phaser CE, PIXI and P2 available as vendor imports
 * Project directory structure w/READMEs
 * Skeleton modules for game setup, core states, asset loading and player control
 * Barebones HTML and CSS shell
 * StandardJS linting with some additional rules for basic error-catching and brevity
 * `dist` directory output for ease of deployment

## Quickstart

 1. Clone the repo
 2. Run `npm install`
 3. Run `npm start`
 4. Visit `localhost` on port 8080

## Build scripts

`npm run <scriptname>`

 * `start` - runs the Webpack dev server, builds the app, serves it on localhost while watching for changes and live-reloading as needed.
 * `build` - performs a production build (minified etc) to the `/dist` directory.

## Linting

ESLint is used to provide IDE warnings as appropriate, though no hooks are currently present to prevent lint errors from being committed and pushed.

Lint rules are StandardJS and ESLint recommended, combined, with the following additions:

 * No `console` statements (will keep output clean over time and help debugging)
 * Require dangling comma for multiline declarations (will make adding/removing items from a collection easier)
 * No semicolons (cleaner code and less typing)

## Skeleton features

 * **Basic states created** - `startup`, `title` and `play` states are already in place and wired up.
 * **Easier game object handling** - includes helper methods and factories to more easily add game objects to the state, with suitable defaults (e.g. centred anchor position).
 * **Asset preloading tools** - contains a helper method to load a manifest of assets, and a basic UI text component to report progress.
 * **Jump to state via URL hash** - a state defined in `game/states/index.js` can be jumped to by passing its name in the URL hash e.g. `localhost:8080/#play` will jump to the `play` state, if defined. _Note: this only works on initial page load; there is no HTML5 History integration and the state will not respond to hash changes once the page has loaded._
 * **HTML page shell** - barebones styled HTML and CSS shell, with Canvas placeholder text and centred layout.

## njmcode's Notes On Game Jamming

### Order of events

 1. Make it **work**
 2. Make it **fun**
 3. Make it **polished**

### What matters (do these first)

 * Fun gameplay
 * Core game mechanics & play loop
 * Player controls & tactility
 * Success/failure feedback
 * Sense of player agency and involvement
 * Metric of success - win screen, trackable score, levels etc
 * Minimum required in-game graphics and sound
 * Anything that imparts a sense of joy, excitement, fear etc

### What doesn't matter\* (do these if you have time)

 * Frontend aesthetics (menus, title, logos etc)
 * Complex animation
 * Custom music (unless a music or horror-based game)
 * User customization (options, tweaks etc)
 * Massive variety of content
 * Special effects


\* _unless integral to the core gameplay loop_
