// requires impact.feature.gui.gui

export {};

declare global {
  namespace sc {
    namespace EnemyDisplayGui {
      type LoadedCallback = (gui: sc.EnemyDisplayGui) => void;
    }
    interface EnemyDisplayGui extends ig.GuiElementBase {}
    interface EnemyDisplayGuiConstructor extends ImpactClass<EnemyDisplayGui> {
      new (
        enemyName: string,
        skipIfLoaded?: Nullable<boolean>,
        anim?: Nullable<string>,
        callback?: Nullable<sc.EnemyDisplayGui.LoadedCallback>,
        random?: Nullable<boolean>,
        boosted?: Nullable<boolean>,
      ): EnemyDisplayGui;
    }
    var EnemyDisplayGui: EnemyDisplayGuiConstructor;
  }
}
