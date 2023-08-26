export {};

declare global {
  namespace sc {
    interface Model {
      observers: Array<sc.Model.Observer<this>>;
    }
    namespace Model {
      interface Observer<M extends sc.Model = sc.Model> {
        modelChanged(this: this, model: M, message: number, data: unknown): void;
      }

      function addObserver<M extends sc.Model = sc.Model>(model: M, observer: Observer<M>): void;
      function removeObserver<M extends sc.Model = sc.Model>(model: M, observer: Observer<M>): void;
      function notifyObserver<M extends sc.Model = sc.Model>(
        model: M,
        message: number, // TODO: can the message enum be somehow inferred here?
        data?: unknown,
      ): void;
      function isObserver<M extends sc.Model = sc.Model>(model: M, observer: Observer<M>): boolean;
    }
  }
}
