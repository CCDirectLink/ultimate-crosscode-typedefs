// requires impact.base.image
// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires game.feature.gui.base.numbers
// requires game.feature.combat.combat
// requires game.feature.menu.gui.enemies.enemy-pages
// requires game.feature.quick-menu.gui.quick-item-menu

export {};

declare global {
  namespace sc {
    interface QuickBorderArrowLevelBox extends ig.GuiElementBase {
      ninepatch: ig.NinePatch;
      levelNumber: sc.NumberGui;
      displayColor: number;
      sizeTransition: ig.GuiHook.SizeTransition;
      nameVisible: boolean;

      doSizeTransition(
        this: this,
        width: Nullable<number>,
        height: Nullable<number>,
        time: number,
        timeFunction: KeySpline,
        delay: Nullable<number>,
      ): void;
      getLevelColor(enemyLevel: number): sc.GUI_NUMBER_COLOR;
    }
    interface QuickBorderArrowLevelBoxConstructor extends ImpactClass<QuickBorderArrowLevelBox> {
      new (enemyName: string, entity: ig.ENTITY.Enemy): QuickBorderArrowLevelBox;
    }
    var QuickBorderArrowLevelBox: QuickBorderArrowLevelBoxConstructor;
  }
}
