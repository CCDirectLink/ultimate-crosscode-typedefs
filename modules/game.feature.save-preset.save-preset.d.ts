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

      onCacheCleared(): void;
      getJsonPath(): string;
      onload(preset: SavePresetData): void
    }

    interface SavePreset extends ig.GameAddon {
      slots: SavePresetData[];

      load(id: number): void;
    }

    var savePreset: SavePreset;
  }
}
