import Phaser from 'phaser';

import * as constants from '../constants/constants';
import { State } from '../game/state';
import * as util from '../util/util';

export const decorateGameScene = (add: Phaser.GameObjects.GameObjectFactory, state: State) => {
  for (var x = 0; x < constants.GAME_WIDTH_TILES; x++) {
    for (var y = 0; y <  constants.GAME_HEIGHT_TILES; y++) {
      const [xPx, yPx] = util.calculateTilePositionPx(x, y);
      state.backgroundTiles = state.backgroundTiles.push(
        add.image(
          xPx,
          yPx,
          'spritesheet',
          7,
        ).setScale(4),
      );
    }
  }
}
