// requires impact.base.game

export {};

declare global {
  namespace sc {
    interface AutoControl extends ig.GameAddon {
      get(this: this, type: string): boolean;
      isActive(this: this): boolean
      setActive(this: this, value: boolean): void
    }
    interface AutoControlConstructor extends ImpactClass<AutoControl> {
      new (): AutoControl;
    }
    var AutoControl: AutoControlConstructor;
  }
}
