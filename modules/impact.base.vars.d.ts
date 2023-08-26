export {};

declare global {
  namespace ig {
    type VarValue = number | boolean | string | LangLabel.Data | Vec2 | Vec3 | undefined | null;

    interface KnownVars {
      'arena.active': boolean;
      'plot.line': number;
      'plot.metaSpace': boolean;
    }

    namespace Vars {
      interface Accessor {
        onVarAccess(this: this, path: string, keys: string[]): VarValue | void;
      }
    }

    interface Vars extends ig.Class {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      storage: any;

      get<K extends keyof ig.KnownVars>(this: this, path: K): ig.KnownVars[K];
      get<T = ig.VarValue>(this: this, path: string): T;
      setDefault<K extends keyof ig.KnownVars>(this: this, path: K, value: ig.KnownVars[K]): void;
      setDefault<T = ig.VarValue>(this: this, path: string, value: T): void;
      set<K extends keyof ig.KnownVars>(this: this, path: K, value: ig.KnownVars[K]): void;
      set<T = ig.VarValue>(this: this, path: string, value: T): void;
      add<K extends keyof ig.KnownVars>(this: this, path: K, value: ig.KnownVars[K]): void;
      add<T = ig.VarValue>(this: this, path: string, value: T): void;
      sub<K extends keyof ig.KnownVars>(this: this, path: K, value: ig.KnownVars[K]): void;
      sub<T = ig.VarValue>(this: this, path: string, value: T): void;
      mul<K extends keyof ig.KnownVars>(this: this, path: K, value: ig.KnownVars[K]): void;
      mul<T = ig.VarValue>(this: this, path: string, value: T): void;
      div<K extends keyof ig.KnownVars>(this: this, path: K, value: ig.KnownVars[K]): void;
      div<T = ig.VarValue>(this: this, path: string, value: T): void;
      mod<K extends keyof ig.KnownVars>(this: this, path: K, value: ig.KnownVars[K]): void;
      mod<T = ig.VarValue>(this: this, path: string, value: T): void;
      and<K extends keyof ig.KnownVars>(this: this, path: K, value: ig.KnownVars[K]): void;
      and<T = ig.VarValue>(this: this, path: string, value: T): void;
      or<K extends keyof ig.KnownVars>(this: this, path: K, value: ig.KnownVars[K]): void;
      or<T = ig.VarValue>(this: this, path: string, value: T): void;
      xor<K extends keyof ig.KnownVars>(this: this, path: K, value: ig.KnownVars[K]): void;
      xor<T = ig.VarValue>(this: this, path: string, value: T): void;
      
      registerVarAccessor(this: this, domain: string, accessor: ig.Vars.Accessor, editor?: string): void;
    }
    interface VarsConstructor extends ImpactClass<Vars> {
      new (): Vars;
    }
    var Vars: VarsConstructor;
    var vars: Vars;

    interface VarCondition extends ig.Class {
      code: string;
      pretty: string;
      vars: string[];
      condition: () => boolean;

      setCondition(this: this, condition: string): void;
      evaluate(this: this): boolean;
      toString(this: this): string;
    }
    interface VarConditionConstructor extends ImpactClass<VarCondition> {
      new (condition: string | undefined): ig.VarCondition;
    }
    var VarCondition: ig.VarConditionConstructor;
  }
}
