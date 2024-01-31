// requires impact.base.font
// requires impact.feature.gui.gui
// requires game.feature.font.font-system

export {};

declare global {
  namespace sc {
    type TextLike = string | { toString(): string } | null;

    namespace TextGui {
      interface LevelDrawData {
        level: number;
        numberGfx: ig.Image;
        isScalable: boolean;
      }

      interface Settings extends ig.TextBlock.Settings {
        font?: ig.MultiFont;
        drawCallback?: ig.TextBlock.DrawCallback;
      }
    }
    interface TextGui extends ig.GuiElementBase {
      font: ig.MultiFont;
      text: sc.TextLike;
      textBlock: ig.TextBlock;
      beepSound: ig.Sound;
      bleepDelay: number;
      playSound: boolean;
      stopped: boolean;

      onVisibilityChange(this: this, visible: boolean): void;
      setBeepSound(this: this, beepSound: ig.Sound): void;
      setMaxWidth(this: this, maxWidth?: Nullable<number>): void;
      setTextAlign(this: this, align: ig.Font.ALIGN): void;
      setTextSpeed(this: this, textSpeed: ig.TextBlock.SPEED): void;
      setFont(this: this, font?: Nullable<ig.MultiFont>, linePadding?: Nullable<number>): void;
      setDrawCallback(this: this, callback: ig.TextBlock.DrawCallback): void;
      setText(this: this, text: sc.TextLike): void;
      clear(this: this): void;
      finish(this: this): void;
      stop(this: this): void;
      reset(this: this): void;
      resume(this: this): void;
    }
    interface TextGuiConstructor extends ImpactClass<TextGui> {
      new (text: sc.TextLike, settings?: sc.TextGui.Settings): TextGui;
    }
    var TextGui: TextGuiConstructor;
  }
}
