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
