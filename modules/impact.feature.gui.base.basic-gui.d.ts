// requires impact.feature.gui.gui

export {};

declare global {
  namespace ig {
    interface ImageGui extends ig.GuiElementBase {
      image?: Optional<ig.Image>;
      offsetX: number;
      offsetY: number;
      renderMode?: Optional<string>;
      flipX: boolean;
      flipY: boolean;
      pivotOverride: boolean;

      setImage(
        this: this,
        image: ig.Image,
        offsetX?: Optional<number>,
        offsetY?: Optional<number>,
        width?: Optional<number>,
        height?: Optional<number>,
      ): void;
    }
    interface ImageGuiConstructor extends ImpactClass<ImageGui> {
      new (
        image?: Optional<ig.Image>,
        offsetX?: Optional<number>,
        offsetY?: Optional<number>,
        width?: Optional<number>,
        height?: Optional<number>,
      ): ig.ImageGui;
    }
    var ImageGui: ImageGuiConstructor;

    interface ColorGui extends ig.GuiElementBase {
      color: string;
      renderMode?: Optional<string>;
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
