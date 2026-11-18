// requires impact.base.entity
// requires impact.base.actor-entity
// requires impact.feature.effect.effect-sheet

export {};

declare global {
  namespace ig {
    namespace ENTITY {
      namespace FerroSpot {
        interface Settings extends ig.Entity.Settings {
          source: boolean;
          variable: string;
          activeCondition: string;
        }
      }
      interface FerroSpot extends ig.AnimatedEntity {
        state: number;
        reached: boolean;
        source: boolean;
        ferro: sc.FerroEntity;
        searched: boolean;
        effects: { sheet: ig.EffectSheet; handle: Nullable<ig.ENTITY.Effect> };
        _wm: ig.Config;
        variable: string;

        spawnFerro(this: this, spawnEffects?: boolean): void;
        isActive(this: this): boolean;
        showPermaFx(this: this): void;
        clearPermaFx(this: this): void;
        setOff(this: this): void;
        setCarry(this: this, spawnEffects?: boolean): void;
        setStandby(this: this, spawnEffects?: boolean): void;
        setRespawn(this: this): void;
        ballHit(this: this, ballLike: ig.BallLike, blockDir?: Vec2): boolean;
        varsChanged(this: this): void;
        checkNonSourceInactive(this: this): void;
      }
      interface FerroSpotConstructor extends ImpactClass<FerroSpot> {
        new (x: number, y: number, z: number, settings: ig.ENTITY.FerroSpot.Settings): FerroSpot;
      }
      var FerroSpot: FerroSpotConstructor;

      namespace FerroLine {
        interface Settings extends ig.Entity.Settings {
          spot?: Nullable<ig.Event.GetEntity>;
        }
      }
      interface FerroLine extends ig.Entity {
        patterns: ig.ImagePatternSheet;
        spotSetting?: Nullable<ig.Event.GetEntity>;
        spot: Nullable<ig.ENTITY.FerroSpot>;
        state: number;
        timer: number;
        _wm: ig.Config;

        assignFerroSpot(this: this, spot: Nullable<ig.ENTITY.FerroSpot>): void;
      }
      interface FerroLineConstructor extends ImpactClass<FerroLine> {
        new (x: number, y: number, z: number, settings: ig.ENTITY.FerroLine.Settings): FerroLine;
      }
      var FerroLine: FerroLineConstructor;

      namespace FerroRespawner {
        interface Settings extends ig.AnimatedEntity.Settings {}
      }
      interface FerroRespawner extends ig.AnimatedEntity {
        state: number;
        hits: number;
        timer: number;
        hitSound: ig.Sound;
        _wm: ig.Config;
        spot: Nullable<ig.ENTITY.FerroSpot>;

        assignFerroSpot(this: this, spot: ig.ENTITY.FerroSpot): void;
        updateState(this: this, animImmediately?: boolean): void;
        ballHit(this: this, ballLike: ig.BallLike, blockDir?: Vec2): boolean;
        updateHitAnim(this: this): void;
      }
      interface FerroRespawnerConstructor extends ImpactClass<FerroRespawner> {
        new (
          x: number,
          y: number,
          z: number,
          settings: ig.ENTITY.FerroRespawner.Settings,
        ): FerroRespawner;
      }
      var FerroRespawner: FerroRespawnerConstructor;
    }
  }
  namespace sc {
    namespace FerroEntity {
      interface Settings extends ig.Entity.Settings {
        spot?: ig.ENTITY.FerroSpot;
      }
    }
    namespace FerroEntity {
      interface State {
        noInterrupt?: boolean;
        noMerge?: boolean;
        noBarrierStop?: boolean;
        anims?: Record<string, string>;
        elementReact?: sc.ELEMENT[];

        start(entity: sc.FerroEntity, vel: Vec2, combatant: sc.BasicCombatant): void | boolean;
        update(): void | boolean;
        onQuickStop?(entity: sc.FerroEntity): void;
        breakIce?(entity: sc.FerroEntity): void;
        onTouchGround?(entity: sc.FerroEntity, num: number): void;
        explode?(entity: sc.FerroEntity): void;
        ballHit?(
          entity: sc.FerroEntity,
          vel: Vec2,
          entity1: ig.Entity,
          element: sc.ELEMENT,
        ): boolean;
        onMoveTrace?(entity: sc.FerroEntity, entity1: ig.Entity): void;
        iceBreak?(entity: sc.FerroEntity): void;
        onAttackHit?(entity: sc.FerroEntity): void;
        ballHitFilter?(entity: sc.FerroEntity): boolean;
        onOtherBallHit?(entity: sc.FerroEntity): void;
        onCollideWith?(entity: sc.FerroEntity): void;
        steam?(entity: sc.FerroEntity, vel: Vec2, combatant: sc.BasicCombatant): void;
        shootFromWall?(entity: sc.FerroEntity, vel: Vec2, combatant?: sc.BasicCombatant): void;
      }
      interface States {
        IDLE: sc.FerroEntity.State;
        RESPAWN: sc.FerroEntity.State;
        DELETE: sc.FerroEntity.State;
        GATE_ABSORB: sc.FerroEntity.State;
        BARRIER_BREAK: sc.FerroEntity.State;
        NEUTRAL: sc.FerroEntity.State;
        BOUNCE_BACK: sc.FerroEntity.State;
        BOUNCE_BACK_BORDER: sc.FerroEntity.State;
        BOUNCE_BACK_SMALL: sc.FerroEntity.State;
        HEAT: sc.FerroEntity.State;
        COLD: sc.FerroEntity.State;
        SHOCK: sc.FerroEntity.State;
        WAVE: sc.FerroEntity.State;
        BOMB_FLY: sc.FerroEntity.State;
        ICEDISK: sc.FerroEntity.State;
        ICEDISK_SLIDE: sc.FerroEntity.State;
        WAVE_COMPRESSOR: sc.FerroEntity.State;
        SHOCK_COMPRESSOR: sc.FerroEntity.State;
      }

      interface Panel extends ig.Entity {
        onBubbleBurst(this: this): void;
      }
    }
    interface FerroEntity extends ig.AnimatedEntity, ig.Entity.Attachable, ig.BallLike {
      state: sc.FerroEntity.State;
      absorbState: Nullable<sc.FerroEntity.State>;
      timer: number;
      ignoreTimer: number;
      startZ: number;
      teleportBall: Nullable<ig.ENTITY.Ball>;
      panel: sc.FerroEntity.Panel;
      mergeTimer: number;
      mergeEntity: ig.Entity;
      mergeStartPos: Vec3;
      attackInfo: Nullable<sc.AttackInfo>;
      savedDir: Vec2;
      element: Nullable<sc.ELEMENT>;
      combatant: Nullable<ig.ENTITY.Combatant>;
      collisionList: ig.Entity[];
      collReleaseTimer: number;
      collReleaseTimeList: number[];
      fastMode: boolean;
      speedFactor: number;
      phaseMode: boolean;
      phaseTraveled: number;
      wallKillTimer: number;
      enterWall: { timer: number; dir: Vec2 };
      slidingWall: Vec2;
      blockCheck: number;
      turnSoundTimer: number;
      wallBounces: number;
      startCollType: ig.COLLTYPE;
      lastSpot: Nullable<ig.ENTITY.FerroSpot>;
      effects: Record<
        'sheet' | 'bomb' | 'bubble' | 'handle' | 'hitHandle' | 'perma' | 'trail',
        Nullable<ig.EffectSheet>
      >;
      _wm: ig.Config;

      remove(this: this, absorb?: boolean): void;
      respawn(this: this, spot?: ig.ENTITY.FerroSpot): void;
      isRespawning(this: this): boolean;
      assignSpot(this: this, spot: ig.ENTITY.FerroSpot): void;
      resetColl(this: this, dontResetAttackInfo?: boolean): void;
      getAbsorbAnim(this: this, anim: string): string;
      handleSurrounding(this: this): void;
      isCloseInEntity(this: this, entity: ig.Entity): boolean;
      updateStartZ(this: this): void;
      setState(
        this: this,
        state: sc.FerroEntity.State,
        vel: Vec2,
        combatant: sc.BasicCombatant,
      ): void | boolean;
      setAbsorbState(
        this: this,
        absorbState: sc.FerroEntity.State,
        vel: Nullable<Vec2>,
        panel: sc.FerroEntity.Panel,
      ): void;
      setMergeEntity(this: this, mergeEntity: ig.Entity): void;
      clearAbsorbState(this: this): void;
      ballHit(this: this, ballLike: ig.BallLike, blockDir?: Vec2): boolean;
      overlapActivateCheck(this: this): void;
      killCloseRegenDestruct(this: this, radius: number, exception?: ig.Entity): void;
      onPhysicsSquish(this: this): void;
      onTouchGround(this: this, num: number): void;
      setTeleportBall(this: this, teleportBall: ig.ENTITY.Ball): void;
      clearTeleportBall(this: this): void;
      doTeleport(this: this): void;
      onTeleportStart(this: this, waveTeleporter: ig.ENTITY.WaveTeleport): void;
      getTeleportZOffset(this: this): number;
      getAttackInfo(this: this): sc.AttackInfo;
      isWaterBubble(this: this): boolean;
      isIceDisk(this: this): boolean;
      steam(this: this, vel: Vec2, combatant: sc.BasicCombatant): void;
      isCompressor(this: this): boolean;
      consume(this: this): void;
      onCompressorMoveEnd(this: this, respawnOrSetIdle?: boolean): void;
      _getAssistFactor(this: this): number;
      isBallAdjust(this: this): boolean;
      doBallAdjust(this: this, pos: Vec3, dir: Vec2, size: Vec3): number;
      isBallDestroyer(this: this): boolean;
      shootFromWall(this: this, vel: Vec2, combatant?: sc.BasicCombatant): void;
    }
    interface FerroEntityConstructor extends ImpactClass<FerroEntity> {
      new (x: number, y: number, z: number, settings: sc.FerroEntity.Settings): FerroEntity;
    }
    var FerroEntity: FerroEntityConstructor;

    namespace FerroWaveAttack {
      interface Settings extends ig.Entity.Settings {}
    }
    interface FerroWaveAttack extends ig.Entity, ig.BallLike {}
    interface FerroWaveAttackConstructor extends ImpactClass<FerroWaveAttack> {
      new (x: number, y: number, z: number, settings: sc.FerroWaveAttack.Settings): FerroWaveAttack;
    }
    var FerroWaveAttack: FerroWaveAttackConstructor;
  }
}
