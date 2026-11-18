// requires impact.base.entity
// requires impact.feature.effect.effect-sheet
// requires game.feature.menu.menu-model

export {};

declare global {
  namespace sc {
    interface ItemDestructType {
      size: Vec3;
      effectOffset: Vec3;
      boom: { sheet: string; name: string };
      debris: { sheet: string; name: string };
      anims: ig.AnimationSheet.Settings;
    }
    interface ITEM_DESTRUCT_TYPE {
      StoneOfValor: sc.ItemDestructType;
      StoneOfSpace: sc.ItemDestructType;
      StoneOfTruth: sc.ItemDestructType;
      StoneOfSpirit: sc.ItemDestructType;
      StoneOfAges: sc.ItemDestructType;
      StoneOfNothing: sc.ItemDestructType;
      AutumnPlantA: sc.ItemDestructType;
      'Autumn-Ground-1': sc.ItemDestructType;
      'Autumn-Ground-2': sc.ItemDestructType;
      'Autumn-Water-1': sc.ItemDestructType;
      'Autumn-Water-2': sc.ItemDestructType;
      'Autumn-Special': sc.ItemDestructType;
      'Autumn-Water-Special': sc.ItemDestructType;
      'Autumn-Fall-Ground-1': sc.ItemDestructType;
      'Autumn-Fall-Ground-2': sc.ItemDestructType;
      'Autumn-Fall-Water-1': sc.ItemDestructType;
      'Autumn-Fall-Water-2': sc.ItemDestructType;
      'Autumn-Fall-Special': sc.ItemDestructType;
      'Autumn-Fall-Water-Special': sc.ItemDestructType;
      'Bergen-PlantA-1': sc.ItemDestructType;
      'Bergen-PlantA-2': sc.ItemDestructType;
      'Bergen-PlantA-Rare': sc.ItemDestructType;
      'Bergen-PlantB-1': sc.ItemDestructType;
      'Bergen-PlantB-2': sc.ItemDestructType;
      'Bergen-PlantB-Rare': sc.ItemDestructType;
      'Bergen-PlantA-1-Snow': sc.ItemDestructType;
      'Bergen-PlantA-2-Snow': sc.ItemDestructType;
      'Bergen-PlantA-Snow-Rare': sc.ItemDestructType;
      'Bergen-PlantB-1-Snow': sc.ItemDestructType;
      'Bergen-PlantB-2-Snow': sc.ItemDestructType;
      'Bergen-PlantB-Snow-Rare': sc.ItemDestructType;
      'Bergen-Snow-Crystal': sc.ItemDestructType;
      'Bergen-Vase-1': sc.ItemDestructType;
      'Cold-Dng-Egg-1': sc.ItemDestructType;
      'Cold-Dng-Egg-2': sc.ItemDestructType;
      'Cold-Dng-Egg-3': sc.ItemDestructType;
      'Cold-Dng-Egg-4': sc.ItemDestructType;
      'Cold-Dng-Egg-Special-A': sc.ItemDestructType;
      'Cold-Dng-Egg-Special-B': sc.ItemDestructType;
      'Heat-Cactus-1': sc.ItemDestructType;
      'Heat-Cactus-2': sc.ItemDestructType;
      'Heat-Cactus-Special': sc.ItemDestructType;
      'Heat-Dry-Cactus-1': sc.ItemDestructType;
      'Heat-Dry-Cactus-2': sc.ItemDestructType;
      'Heat-Palmapple-1': sc.ItemDestructType;
      'Heat-Palmapple-2': sc.ItemDestructType;
      'Heat-Palmapple-Special': sc.ItemDestructType;
      'Heat-Dry-Bush-1': sc.ItemDestructType;
      'Heat-Dry-Bush-2': sc.ItemDestructType;
      'Heat-Dry-Bush-Special': sc.ItemDestructType;
      'Heat-Bones-1': sc.ItemDestructType;
      'Heat-Bones-2': sc.ItemDestructType;
      'Heat-Bones-Special': sc.ItemDestructType;
      'Heat-Hill-1': sc.ItemDestructType;
      'Heat-Hill-2': sc.ItemDestructType;
      'Heat-Hill-Special': sc.ItemDestructType;
      'Bakii-Vase': sc.ItemDestructType;
      'Jungle-Flower-1': sc.ItemDestructType;
      'Jungle-Flower-2': sc.ItemDestructType;
      'Jungle-Flower-Special': sc.ItemDestructType;
      'Jungle-Bees-1': sc.ItemDestructType;
      'Jungle-Bees-2': sc.ItemDestructType;
      'Jungle-Bees-3': sc.ItemDestructType;
      'Jungle-Waterplant-1': sc.ItemDestructType;
      'Jungle-Waterplant-2': sc.ItemDestructType;
      'Jungle-Waterplant-Special': sc.ItemDestructType;
      'Jungle-Waterplant-Closed-1': sc.ItemDestructType;
      'Jungle-Waterplant-Closed-2': sc.ItemDestructType;
      'Jungle-Shroom-1': sc.ItemDestructType;
      'Jungle-Shroom-2': sc.ItemDestructType;
      'Jungle-Shroom-Special': sc.ItemDestructType;
      'Jungle-Flower-Dotted-1': sc.ItemDestructType;
      'Jungle-Flower-Dotted-2': sc.ItemDestructType;
      'Jungle-Flower-Dotted-Special': sc.ItemDestructType;
      'Sapphire-Bush-1': sc.ItemDestructType;
      'Sapphire-Bush-2': sc.ItemDestructType;
      'Sapphire-Bush-Special': sc.ItemDestructType;
      'Sapphire-Bamboo-1': sc.ItemDestructType;
      'Sapphire-Bamboo-2': sc.ItemDestructType;
      'Sapphire-Bamboo-Special': sc.ItemDestructType;
      'Sapphire-Cobalt-1': sc.ItemDestructType;
      'Sapphire-Cobalt-2': sc.ItemDestructType;
      'Sapphire-Cobalt-Special': sc.ItemDestructType;
      TrashBag1: sc.ItemDestructType;
      TrashBag2: sc.ItemDestructType;
      TrashBag3: sc.ItemDestructType;
      TrashBag4: sc.ItemDestructType;
      'Final-Cone-1': sc.ItemDestructType;
      'Final-Cone-2': sc.ItemDestructType;
      'Final-Cone-3': sc.ItemDestructType;
      'Final-Cone-4': sc.ItemDestructType;
      'Final-Shard': sc.ItemDestructType;
      'Beach-Coral-1': sc.ItemDestructType;
      'Beach-Coral-2': sc.ItemDestructType;
      'Beach-Grey-1': sc.ItemDestructType;
      'Beach-Grey-2': sc.ItemDestructType;
      'Beach-Green-1': sc.ItemDestructType;
      'Beach-Green-2': sc.ItemDestructType;
    }

    var ITEM_DESTRUCT_TYPE: ITEM_DESTRUCT_TYPE;
  }
  namespace ig {
    namespace ENTITY {
      namespace ItemDestruct {
        interface Settings extends ig.Entity.Settings {
          desType: keyof typeof sc.ITEM_DESTRUCT_TYPE;
          items?: sc.EnemyType.ItemDrop[];
          _globalSettingKey?: keyof typeof sc.ITEM_DESTRUCT_TYPE;
        }
      }
      interface ItemDestruct extends ig.AnimatedEntity {
        _wm: ig.Config;
        blinkTimer: number;
        dropped: boolean;
        itemDrops: { id: sc.ItemID; prob: number }[];
        typeData: sc.ItemDestructType;
        permaDeath: boolean;
        globalKey: {
          key: keyof typeof sc.ITEM_DESTRUCT_TYPE;
          anim: keyof typeof sc.ITEM_DESTRUCT_TYPE;
        };
        enemyInfo: sc.EnemyInfo;
        enemyChance: number;
        boomEffect: ig.EffectHandle;
        debrisEffect: ig.EffectHandle;
        trigger: string;
        indestructible: boolean;

        _getVarPrefix(this: this): string;
        ballHit(this: this, ballLike: ig.BallLike, blockDir?: Vec2): boolean;
        destroy(this: this): void;
        setDropped(this: this): void;
        dropItem(this: this): void;
      }
      interface ItemDestructConstructor extends ImpactClass<ItemDestruct> {
        new (
          x: number,
          y: number,
          z: number,
          settings: ig.ENTITY.ItemDestruct.Settings,
        ): ItemDestruct;
      }
      var ItemDestruct: ItemDestructConstructor;
    }
  }
}
