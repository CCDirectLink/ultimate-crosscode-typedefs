// requires impact.base.entity

export {};

declare global {
  namespace sc {
    enum GROUP_SWITCH_UPDATE_TYPE {
      LOCAL = 0,
      GLOBAL = 1,
    }
  }
  namespace ig.ENTITY {
    interface GroupSwitch extends ig.AnimatedEntity {
      ballHit(this: this, ballLike: ig.BallLike, blockDir?: Vec2): boolean;
    }
    interface GroupSwitchConstructor extends ImpactClass<GroupSwitch> {
      new (x: number, y: number, z: number, settings: unknown): GroupSwitch;
    }
    var GroupSwitch: GroupSwitchConstructor;
  }
  namespace sc {
    interface GROUP_SWITCH_TYPE_BASE {
      size: Vec3;
      activeZHeight: number;
      useStyleSheet: boolean;
      anims: any;

      hitCondition(switchEntity: ig.ENTITY.GroupSwitch, ball: ig.ENTITY.Ball): void;
    }
    interface GROUP_SWITCH_TYPE {
      default: GROUP_SWITCH_TYPE_BASE;
    }
    var GROUP_SWITCH_TYPE: GROUP_SWITCH_TYPE;
  }
}
