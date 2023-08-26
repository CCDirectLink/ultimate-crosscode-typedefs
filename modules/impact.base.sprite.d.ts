// requires impact.base.image

export {};

declare global {
  namespace ig {
    interface CubeSprite extends ig.Class {
      size: Vec3;
      alpha: number;
      
      setPos(this: this, x: number, y: number, z: number): void;
      setGfxOffset(this: this, x: number, y: number): void;
      setGfxCut(this: this, top: number, bottom: number, left: number, right: number): void;
      setShadow(
        this: this,
        x: number,
        y: number,
        z: number,
        diameter: number,
        type?: ig.COLL_SHADOW_TYPE,
        scaleY?: number
        ): void;
      setImageSrc(
        this: this,
        image: ig.Drawable | ig.DoubleColor,
        offsetX?: Optional<number>,
        offsetY?: Optional<number>,
      ): void;
      setOverlayColor(this: this, color: string, alpha: number): void;
      setLighterOverlayColor(this: this, color: string, alpha: number): void;
      setInvisible(this: this): void;
      setEntityDefault(
        this: this,
        entity: ig.Entity,
        tileWidth: number,
        tileHeight: number,
        shapeType: ig.ANIM_SHAPE_TYPE | keyof typeof ig.ANIM_SHAPE_TYPE,
        wallY: number,
        offset: Vec3 | null,
        image: ig.Image,
        srcX: number,
        srcY: number,
      ): void;

    }
    interface CubeSpriteConstructor extends ImpactClass<CubeSprite> {}
    var CubeSprite: CubeSpriteConstructor;
  }
}
