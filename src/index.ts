import Phaser from "phaser";
import * as loader from './loader/loader';
import * as decor from './decor/decor';
import * as constants from './constants/constants';
import { WallManager } from './game/wallManager';
import { State } from './game/state';

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: constants.GAME_WIDTH,
  height: constants.GAME_HEIGHT,
  pixelArt: true,
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
    }
  },
  scene: {
    preload: preload,
    create: create
  }
};

const game = new Phaser.Game(config);
const state = new State();
const walls = new WallManager();

function preload(this: Phaser.Scene) {
  loader.loadImages(this.load);
}

function create(this: Phaser.Scene) {
  decor.decorateGameScene(this.add, state);
  walls.create(this.physics, state);
}
