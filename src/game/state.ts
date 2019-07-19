import Phaser from 'phaser';
import Immutable from 'immutable';

export class State {
  public backgroundTiles = Immutable.List<Phaser.GameObjects.Image>();
  public staticGroups = Immutable.Map<string, Phaser.Physics.Arcade.StaticGroup>();
};
