// requires impact.feature.gui.gui
// requires game.feature.gui.base.numbers
// requires game.feature.model.options-model

export {};

declare global {
  namespace sc {
    interface HpHudGui extends ig.GuiElementBase {
      hpNumber: sc.NumberGui;
    }
    interface HpHudGuiConstructor extends ImpactClass<HpHudGui> {
      new (params: sc.CombatParams): HpHudGui;
    }
    var HpHudGui: HpHudGuiConstructor;

    interface HpHudBarGui extends ig.GuiElementBase {
      gfx: ig.Image;
      maxHp: number;
      currentHp: number;
      targetHp: number;
      timer: number;
      expTimer: number;
      params: sc.CombatParams;
      width: number;
      height: number;
      expRatio: number;

      setExpRatio(ratio: number): void;
      resetHp(newHp: number, maxHp: number): void;
    }
    interface HpHudBarGuiConstructor extends ImpactClass<HpHudBarGui> {
      new (params: sc.CombatParams, width: number, height: number): HpHudBarGui;
    }
    var HpHudBarGui: HpHudBarGuiConstructor;
  }
}
