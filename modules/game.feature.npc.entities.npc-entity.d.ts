// requires game.feature.npc.entities.sc-actor
// requires game.feature.character.character
// requires game.feature.interact.map-interact
// requires game.feature.trade.gui.trade-menu

export {};

declare global {
  namespace ig {
    namespace ENTITY {
      namespace NPC {
        interface Settings extends ig.Entity.Settings {}

        interface InteractIcons {
          normal: sc.MapInteractIcon;
          shop: sc.MapInteractIcon;
          quest: sc.MapInteractIcon;
          arena: sc.MapInteractIcon;
          newMsg: sc.MapInteractIcon;
          trade: sc.MapInteractIcon;
          xeno: sc.MapInteractIcon;
          xenoEvent: sc.MapInteractIcon;
        }
      }
      interface NPC extends sc.ActorEntity {
        characterName: sc.Character
        character: sc.Character
        npcStates: sc.NpcState[]
        npcStatesData: sc.NpcState.Settings[]
        activeStateIdx: number
        configs: Record<string, ig.ActorConfig>
        hidden: boolean
        interactEntry: sc.MapInteractEntry;
        eventBlocked: boolean
        deferredReset: boolean
        npcEffects: ig.EffectSheet
        interactIcons: ig.ENTITY.NPC.InteractIcons;
        lookAtAction: ig.Action
        eventCal: ig.EventCall
        doPostEventAction: boolean
        xenoDialog: ig.ENTITY.XenoDialog
        xenoDialogGui: sc.XenoDialogIcon
        permaEffect: ig.ENTITY.Effect
        displayName?: unknown
        displayTrigger?: unknown
        displayNameRandom?: string
        respawn: { pos: Vec3 }
        hideHandle?: unknown
        hideManager: ig.EntityHideManager

        setMapInteractIcon(this: this, npcState: sc.NpcState): void;
      }
      interface NPCConstructor extends ImpactClass<NPC> {
        new (x: number, y: number, z: number, settings: ig.ENTITY.NPC.Settings): NPC;
      }
      var NPC: NPCConstructor;
    }
  }

  namespace sc {
    enum NPC_EVENT_TYPE {
      SIMPLE = 0,
      TRADE = 1,
      QUEST = 2,
      SHOP = 3,
      ARENA = 4,
    }

    namespace NpcState {
      interface Settings {}
    }

    interface NpcState extends ig.Class {
      npcEventType: sc.NPC_EVENT_TYPE;
      npcEventObj: ig.Event;
    }
    interface NpcStateConstructor extends ImpactClass<NpcState> {
      new (settings: sc.NpcState.Settings, entity: ig.ENTITY.NPC): NpcState;
    }
    var NpcState: NpcStateConstructor;
  }
}
