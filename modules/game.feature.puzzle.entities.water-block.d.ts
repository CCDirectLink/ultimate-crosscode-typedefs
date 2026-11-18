// requires impact.base.entity
// requires impact.feature.effect.effect-sheet

export {};

declare global {
  namespace ig.ENTITY {
    namespace WaterBlock {
      interface Settings extends ig.AnimatedEntity.Settings {
        blockType?: keyof BlockType;
        changeDuration?: number;
      }
      interface BlockType {
        shape: ig.COLLSHAPE;
        offY: number;
        flipX: boolean;
        wallY: number;
      }
      interface BLOCK_TYPES {
        SQUARE: BlockType;
        CORNER_NE: BlockType;
        CORNER_SE: BlockType;
        CORNER_SW: BlockType;
        CORNER_NW: BlockType;
      }
    }
    interface WaterBlock extends ig.AnimatedEntity, ig.EffectSheet.EventCallback {
      blockType: number;
      state: number;
      changeDuration: number;
      timer: number;
      compressorSlow: number;
      effects: {
        sheet: ig.EffectSheet;
        handle: Nullable<ig.EffectHandle>;
        hitHandle: Nullable<ig.EffectHandle>;
      };
      _wm: ig.Config;

      steam(this: this, vec: Vec2, combatant?: ig.ENTITY.Combatant): void;
      isCompressor(this: this): boolean;
      isFrozen(this: this): boolean;
      turnIce(this: this): void;
      melt(this: this): void;
      reform(this: this): void;
      bounce(this: this): void;
      onGroundAdd(this: this, entity: ig.Entity): void;
      ballHit(this: this, ballLike: ig.BallLike, blockDir?: Vec2): boolean;
    }
    interface WaterBlockConstructor extends ImpactClass<WaterBlock> {
      new (x: number, y: number, z: number, settings: ig.ENTITY.WaterBlock.Settings): WaterBlock;
    }
    var WaterBlock: WaterBlockConstructor;
  }
}
