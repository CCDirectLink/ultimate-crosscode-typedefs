export {};

declare global {
  namespace ig {
    interface StepBase extends ig.Class {
      _nextStep: Optional<ig.StepBase>;
      _cacheIsCleared: boolean;
      branches: Record<string, ig.StepBase> | null | undefined;

      start(this: this, ...args: unknown[]): void;
      run(this: this, ...args: unknown[]): boolean;
      getNext(this: this, ...args: unknown[]): Optional<ig.StepBase>;
      getJumpLabelName?(this: this): string | null;
      getBranchNames?(this: this): string[];
    }
    interface StepBaseConstructor extends ImpactClass<StepBase> {
      new (settings: unknown): StepBase;
    }
    var StepBase: StepBaseConstructor;
  }
}
