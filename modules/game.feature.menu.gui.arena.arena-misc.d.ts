// requires impact.feature.gui.base.box
// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires game.feature.menu.gui.menu-misc
// requires game.feature.menu.gui.arena.arena-cup-page
// requires game.feature.menu.gui.arena.arena-round-page
// requires game.feature.menu.gui.stats.stats-types

export {};

declare global {
  namespace sc {
    interface ArenaInfoBox extends ig.BoxGui {
      title: sc.TextGui;
      category: sc.TextGui;
      level: sc.NumberGui;
    }
    interface ArenaInfoBoxConstructor extends ImpactClass<ArenaInfoBox> {
      new (): sc.ArenaInfoBox;
    }
    var ArenaInfoBox: ArenaInfoBoxConstructor;

    interface ArenaEntryButton extends sc.ListBoxButton {
      trophyGfx: ig.Image;
      key: Nullable<string>
      description: Nullable<string>;
      decoration: ig.ImageGui;

      setDecoration(this: this, medal: Nullable<sc.ARENA_MEDALS_TROPHIES>): void;
    }
    interface ArenaEntryButtonConstructor extends ImpactClass<ArenaEntryButton> {
      new (
        text: string,
        key: Nullable<string>,
        description: Nullable<string>,
        medal: Nullable<sc.ARENA_MEDALS_TROPHIES>,
      ): ArenaEntryButton;
    }
    var ArenaEntryButton: ArenaEntryButtonConstructor;

    interface ArenaRoundEntryButton extends sc.ArenaEntryButton {
      round: sc.NumberGui;
      dots: ig.ImageGui;
      index: number;
    }
    interface ArenaRoundEntryButtonConstructor extends ImpactClass<ArenaRoundEntryButton> {
      new (
        text: string,
        key: Nullable<string>,
        index: number,
        description: Nullable<string>,
        totalRounds: Nullable<number>,
        medal: Nullable<sc.ARENA_MEDALS_TROPHIES>,
      ): ArenaRoundEntryButton;
    }
    var ArenaRoundEntryButton: ArenaRoundEntryButtonConstructor;
  }
}
