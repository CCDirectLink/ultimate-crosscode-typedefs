// requires impact.feature.gui.base.box
// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires game.feature.menu.gui.menu-misc
// requires game.feature.menu.gui.enemies.enemy-pages

export {};

declare global {
  namespace sc {
    interface EnemyInfoBox extends ig.BoxGui {
      level: sc.NumberGui;
      enemy: ig.Database.EnemyData;

      setEnemy(this: this, key: string): void;
    }
    interface EnemyInfoBoxConstructor extends ImpactClass<EnemyInfoBox> {
      new (): EnemyInfoBox;
    }
    var EnemyInfoBox: EnemyInfoBoxConstructor;

    interface EnemyEntryButton extends sc.ListBoxButton {
      key: number;
      level: sc.NumberGui;
    }
    interface EnemyEntryButtonConstructor extends ImpactClass<EnemyEntryButton> {
      new (text: sc.TextLike, key?: Nullable<string>, level?: Nullable<number>): EnemyEntryButton;
    }
    var EnemyEntryButton: EnemyEntryButtonConstructor;
  }
}
