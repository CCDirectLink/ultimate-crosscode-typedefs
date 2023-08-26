// requires impact.base.loader

export {};

declare global {
  namespace ig {
    interface Lang extends ig.SingleLoadable {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      labels: any;

      loadInternal(this: this): void;
      get<T = string>(this: this, path: string): T;
      grammarReplace(
        template: string,
        substitution: sc.TextLike,
        unknownValue?: Optional<any>, // TODO
      ): string;
    }
    interface LangConstructor extends ImpactClass<Lang> {}
    var Lang: LangConstructor;
    var lang: ig.Lang;

    namespace LangLabel {
      // TODO: is a simple string valid `ig.LangLabel.Data`?
      type Data = { [locale: string]: string } & { langUid?: number };
    }
    interface LangLabel extends ig.Class {
      value: string;
      data: Optional<ig.LangLabel.Data>;
      langUid: number;
      originFile: Optional<string>;

      toString(this: this): string;
    }
    interface LangLabelConstructor extends ImpactClass<LangLabel> {
      new (data: Optional<ig.LangLabel.Data>): LangLabel;

      setOriginFile(file: Optional<string>): void;
      getOriginFile(): Optional<string>;
      getText(data: ig.LangLabel.Data, allowEmpty?: Optional<boolean>): string;
      bakeVars<T extends string | Optional<ig.LangLabel>>(value: T): T;
    }
    var LangLabel: LangLabelConstructor;
  }
}
