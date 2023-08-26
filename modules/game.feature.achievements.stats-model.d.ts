// requires impact.base.game
// requires impact.feature.storage.storage

export {};

declare global {
  namespace sc {
    interface StatsModel extends ig.GameAddon {
      statsEnabled: boolean;

      set(this: this, stat: string, value: number): void;
      setMax(this: this, stat: string, value: number): void;
      setMin(this: this, stat: string, value: number): void;

      add(this: this, stat: string, value: number): void;
      subtract(this: this, stat: string, value: number): void;

      getMap(this: this, map: string, stat: string): number;
      setMap(this: this, map: string, stat: string, value: number): void;
      addMap(this: this, map: string, stat: string, value: number): void;
      subMap(this: this, map: string, stat: string, value: number): void;
    }
    interface StatsModelConstructor extends ImpactClass<StatsModel> {
      new (): StatsModel;
    }
    var StatsModel: StatsModelConstructor;
    var stats: StatsModel;
  }
}
