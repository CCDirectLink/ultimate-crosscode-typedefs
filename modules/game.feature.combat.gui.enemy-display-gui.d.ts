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
        skipIfLoaded?: Optional<boolean>,
        anim?: Optional<string>,
        callback?: Optional<sc.EnemyDisplayGui.LoadedCallback>,
        random?: Optional<boolean>,
        boosted?: Optional<boolean>,
      ): EnemyDisplayGui;
    }
    var EnemyDisplayGui: EnemyDisplayGuiConstructor;
  }
}
