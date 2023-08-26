export {};

declare global {
  namespace sc {
    interface ProxySpawnerBase extends ig.Class {
      spawn(
        this: this,
        x: number,
        y: number,
        z: number,
        entity: sc.BasicCombatant,
        dir: Vec2,
      ): sc.CombatProxyEntity | ig.ENTITY.Ball | void;
    }
    interface ProxySpawnerBaseConstructor extends ImpactClass<ProxySpawnerBase> {}
    var ProxySpawnerBase: ProxySpawnerBaseConstructor;

    namespace PROXY_TYPE {}

    namespace ProxyTools {
      function getProxy(src: sc.ProxySpawnerBase): sc.ProxySpawnerBase;
      function getProxy(src: string, entity: sc.GetCombatantRoot): sc.ProxySpawnerBase;
    }
  }
}
