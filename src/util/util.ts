import * as constants from '../constants/constants';

export const calculateTilePositionPx = (x: number, y: number): number[] => {
  return [
    (x * constants.GAME_TILE_DIM) + (constants.GAME_TILE_DIM / 2),
    (y * constants.GAME_TILE_DIM) + (constants.GAME_TILE_DIM / 2),
  ]
};
