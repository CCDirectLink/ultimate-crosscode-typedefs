// requires impact.feature.gui.gui

export {};

declare global {
  namespace ig {
    interface ImageGui extends ig.GuiElementBase {
      image?: Nullable<ig.Image>;
      offsetX: number;
      offsetY: number;
      renderMode?: Nullable<string>;
      flipX: boolean;
      flipY: boolean;
      pivotOverride: boolean;

      setImage(
        this: this,
        image: ig.Image,
        offsetX?: Nullable<number>,
        offsetY?: Nullable<number>,
        width?: Nullable<number>,
        height?: Nullable<number>,
      ): void;
    }
    interface ImageGuiConstructor extends ImpactClass<ImageGui> {
      new (
        image?: Nullable<ig.Image>,
        offsetX?: Nullable<number>,
        offsetY?: Nullable<number>,
        width?: Nullable<number>,
        height?: Nullable<number>,
      ): ig.ImageGui;
    }
    var ImageGui: ImageGuiConstructor;

    interface ColorGui extends ig.GuiElementBase {
      color: string;
      renderMode?: Nullable<string>;
    }
    interface ColorGuiConstructor extends ImpactClass<ColorGui> {
      new (color: string, width: number, height: number): ColorGui;
    }
    var ColorGui: ColorGuiConstructor;

    interface SimpleGui extends ig.GuiElementBase {
      hide(this: this, skip?: boolean, initDelay?: number): void;
      show(this: this, skip?: boolean, initDelay?: number): void;
    }
    interface SimpleGuiConstructor extends ImpactClass<SimpleGui> {
      new (): SimpleGui;
    }
    var SimpleGui: SimpleGuiConstructor;
  }
}
