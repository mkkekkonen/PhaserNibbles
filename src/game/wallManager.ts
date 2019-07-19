import Phaser from 'phaser';
import { GameObjectManager } from './gameObjectManager';

import { State } from './state';
import * as util from '../util/util';

const FARTHEST_INDEX = 9;

export class WallManager extends GameObjectManager {
  constructor() {
    super();
  }

  create = (physics: Phaser.Physics.Arcade.ArcadePhysics, state: State) => {
    const walls = physics.add.staticGroup();

    for (let i = 0; i < 9; i++) {
      const [topX, topY] = util.calculateTilePositionPx(i, 0);
      const [rightX, rightY] = util.calculateTilePositionPx(FARTHEST_INDEX, i);
      const [bottomX, bottomY] = util.calculateTilePositionPx(i + 1, FARTHEST_INDEX);
      const [leftX, leftY] = util.calculateTilePositionPx(0, i + 1);

      walls.create(topX, topY, 'spritesheet', 0).setScale(4);
      walls.create(rightX, rightY, 'spritesheet', 0).setScale(4);
      walls.create(bottomX, bottomY, 'spritesheet', 0).setScale(4);
      walls.create(leftX, leftY, 'spritesheet', 0).setScale(4);

      state.staticGroups = state.staticGroups.set('walls', walls);
    }
  };

  update = () => {};
}

