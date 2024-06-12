// requires impact.base.loader
// requires impact.base.game

export {};

declare global {
  namespace sc {
    interface SavePresetData extends ig.JsonLoadable {
      cacheType: string;
      title: any;
      sub: any;
      saveSlot: string;

      onCacheCleared(this: this): void;
      getJsonPath(this: this): string;
      onload(this: this, preset: SavePresetData): void;
    }

    interface SavePreset extends ig.GameAddon {
      slots: SavePresetData[];

      load(this: this, id: number): void;
    }
    interface SavePresetConstructor extends ImpactClass<SavePreset> {
      new (): SavePreset;
    }
    var SavePreset: SavePresetConstructor;

    var savePreset: SavePreset;
  }
}
