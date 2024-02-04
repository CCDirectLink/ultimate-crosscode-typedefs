// requires impact.feature.map-content.entities.prop
// requires game.feature.map-content.gui.icon-hover-text

export {};

declare global {
  namespace sc {
    interface PROP_INTERACT_ICONS_BASE {
      noEvent: sc.MapInteractIcon;
      withEvent: sc.MapInteractIcon;
    }
    var PROP_INTERACT_ICONS: {
      INFO: sc.PROP_INTERACT_ICONS_BASE;
      GRAB: sc.PROP_INTERACT_ICONS_BASE;
    };

    namespace PropInteract {
      interface Settings {
        icon?: keyof typeof sc.PROP_INTERACT_ICONS;
        event?: unknown;
        permaEffect?: ig.EffectHandle.Settings;
        combatOkay?: boolean;
        cutsceneType?: ig.EVENT_TYPE;
        title?: ig.LangLabel.Data;
        hoverText?: ig.LangLabel.Data;
      }
    }
    interface PropInteract extends ig.Class {
      prop: ig.ENTITY.Prop;
      icon: sc.PROP_INTERACT_ICONS_BASE;
      interactEntry: sc.MapInteractEntry;
      permaEffect?: ig.EffectHandle;
      event?: ig.Event;
      combatOkay: boolean;
      cutsceneType?: ig.EVENT_TYPE;

      onShow(this: this): true | undefined;
      onPermaUpdate(this: this): void;
      onHide(this: this): void;
      onKill(this: this): void;
      onInteraction(this: this): boolean;
    }
    interface PropInteractConstructor extends ImpactClass<PropInteract> {
      new (prop: ig.ENTITY.Prop, settings: sc.PropInteract.Settings): PropInteract;
    }
    var PropInteract: PropInteractConstructor;
  }
  namespace ig {
    type PROP_INTERACT_CLASS = sc.PropInteractConstructor;
  }
}
