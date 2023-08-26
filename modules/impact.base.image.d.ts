// requires impact.base.worker
// requires impact.base.loader

export {};

declare global {
  namespace ig {
    interface Drawable {
      draw(
        this: this,
        targetX: number,
        targetY: number,
        sourceX?: number,
        sourceY?: number,
        width?: number,
        height?: number,
        flipX?: boolean,
        flipY?: boolean,
        offsetY?: number,
        offsetHeight?: number,
        fragment?: unknown,
        fragmentAlpha?: number,
        filtered?: unknown
      ): void;
    }

    namespace Image {
      type Data = Exclude<CanvasImageSource, SVGImageElement>;
      type Callback = () => void;
    }

    interface Image extends ig.Loadable, Drawable {
      data: ig.Image.Data;
      width: number;
      height: number;
      additionalCallbacks: Image.Callback[];

      loadInternal(this: this): void;
      addCallback(this: this, callback: Image.Callback): void;
      onload(this: this): void;
      onerror(this: this): void;
      resize(this: this, scale: number): void;
      createPattern(
        this: this,
        x: number,
        y: number,
        width: number,
        height: number,
        optimization: ig.ImagePattern.OPT,
      ): ig.ImagePattern;
    }
    interface ImageConstructor extends ImpactClass<Image> {
      new (pathOrData: string): Image;
    }
    var Image: ImageConstructor;

    enum ImagePattern$OPT {
      NONE,
      REPEAT_X,
      REPEAT_Y,
      REPEAT_X_OR_Y,
      REPEAT_X_AND_Y,
    }
    namespace ImagePattern {
      type OPT = ImagePattern$OPT;
    }
    interface ImagePattern extends ig.Class, Drawable {
      width: number;
    }
    interface ImagePatternConstructor extends ImpactClass<ImagePattern> {
      OPT: typeof ImagePattern$OPT;
      new (
        path: string | ig.Image,
        sourceX: number,
        sourceY: number,
        width: number,
        height: number,
        patternType: ImagePattern$OPT,
      ): ig.ImagePattern;
    }
    var ImagePattern: ImagePatternConstructor;

    interface SimpleColor extends ig.Class, Drawable {
      color: string;
    }
    interface SimpleColorConstructor extends ImpactClass<SimpleColor> {
      new (color: string): SimpleColor;
    }
    let SimpleColor: SimpleColorConstructor;
    
    interface TransitionColor extends ig.Class, Drawable {
      colorA: string;
      colorB: string;
      colorBWeight: number;

      setColorBWeight(this: this, weight: number): void;
    }
    interface TransitionColorConstructor extends ImpactClass<TransitionColor> {
      new (colorA: string, colorB?: string, colorBWeight?: number): TransitionColor;
    }
    let TransitionColor: TransitionColorConstructor;
    
    interface DoubleColor extends ig.Class {
      color1: ig.TransitionColor;
      color2: ig.TransitionColor;
    }
    interface DoubleColorConstructor extends ImpactClass<DoubleColor> {
      new (color1: ig.TransitionColor, color2: ig.TransitionColor): DoubleColor;
    }
    let DoubleColor: DoubleColorConstructor;

    interface ImageAtlas extends ig.Class {
      scale: number;

      getFragment(
        this: this,
        width: number,
        height: number,
        fillCallback: () => void,
      ): ig.ImageAtlasFragment;
      _getFragment(
        this: this,
        width: number,
        height: number,
        fillCallback: () => void,
      ): ig.ImageAtlasFragment;
    }
    interface ImageAtlasConstructor extends ImpactClass<ImageAtlas> {
      new (): ImageAtlas;
    }
    var ImageAtlas: ImageAtlasConstructor;
    var imageAtlas: ig.ImageAtlas;

    interface ImageAtlasFragment extends ig.Class {
      offX: number;
      offY: number;
      width: number;
      height: number;
    }
    interface ImageAtlasFragmentConstructor extends ImpactClass<ImageAtlasFragment> {}
    var ImageAtlasFragment: ImageAtlasFragmentConstructor;
  }
}
