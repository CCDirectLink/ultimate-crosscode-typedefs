// requires impact.feature.gui.gui
// requires impact.feature.gui.base.box

export {};

declare global {
  namespace sc {
    interface CombatHudGui extends ig.GuiElementBase, sc.Model.Observer {
      upperGui: sc.CombatUpperHud;
      lowerGui: sc.CombatLowerHud;
      skipGui: sc.CombatSkipGui;
      lineTimer: number;
      isCombat: boolean;
      isRanked: boolean;

      getLineWidth(this: this): number;
    }
    interface CombatHudGuiConstructor extends ImpactClass<CombatHudGui> {
      new (): CombatHudGui;
    }
    var CombatHudGui: CombatHudGuiConstructor;

    interface CombatSkipGui extends ig.BoxGui {
      ninepatch: ig.NinePatch;
      show(this: this): void;
      hide(this: this): void;
    }
    interface CombatSkipGuiConstructor extends ImpactClass<CombatSkipGui> {
      new (): CombatSkipGui;
    }
    var CombatSkipGui: CombatSkipGuiConstructor;

    namespace CombatUpperHud {
      interface Sub {
        empty: sc.CombatUpperHud.CONTENT_GUI.EMPTY;
        ranked: sc.CombatUpperHud.CONTENT_GUI.RANKED;
        pvp: sc.CombatUpperHud.CONTENT_GUI.PVP;
      }
    }

    interface CombatUpperHud extends ig.GuiElementBase, sc.Model.Observer {
      gfx: ig.Image;
      ninepatch: ig.NinePatch;
      sub: CombatUpperHud.Sub;
      currentSub: sc.CombatUpperHud.ContentGui;

      updateSubGui(this: this, isRanked: boolean, isPvp: boolean): void;
      combatChanged(this: this, isCombat: boolean, isRanked: boolean, isPvp: boolean): void;
      getUpperRightWidth(this: this): number;
    }
    interface CombatUpperHudConstructor extends ImpactClass<CombatUpperHud> {
      new (): CombatUpperHud;
    }
    var CombatUpperHud: CombatUpperHudConstructor;

    interface CombatLowerHud extends ig.GuiElementBase {
      combatChanged(this: this, isCombat: boolean, isRanked: boolean, isPvp: boolean): void;
    }
    interface CombatLowerHudConstructor extends ImpactClass<CombatLowerHud> {
      new (): CombatLowerHud;
    }
    var CombatLowerHud: CombatLowerHudConstructor;

    namespace CombatUpperHud {
      interface ContentGui extends ig.GuiElementBase {
        start(this: this): void;
        end(this: this): void;
      }

      // Local variable
      namespace CONTENT_GUI {
        interface EMPTY extends ContentGui {
          gfx: ig.Image;
        }
        interface EMPTY_CONSTRUCTOR extends ImpactClass<EMPTY> {
          new (): EMPTY;
        }

        interface RANKED extends ContentGui, sc.Model.Observer {
          gfx: ig.Image;
          rankLabel: sc.TextGui;
          rankValue: sc.TextGui;
          progress: number;
          blinkTimer: number;
        }
        interface RANKED_CONSTRUCTOR extends ImpactClass<RANKED> {
          new (): RANKED;
        }

        interface PVP extends ContentGui {
          gfx: ig.Image;
          heads: ig.Image;

          _renderPoints(
            this: this,
            renderer: ig.GuiRenderer,
            x: number,
            dir: number,
            maxPoints: number,
            points: number,
            offSrcX: number,
          ): void;
          _renderHeads(
            this: this,
            renderer: ig.GuiRenderer,
            x: number,
            left: number,
            heads: number[],
          ): void;
        }
        interface PVP_CONSTRUCTOR extends ImpactClass<PVP> {
          new (): PVP;
        }
      }
    }
  }
}
