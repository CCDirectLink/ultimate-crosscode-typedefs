// requires impact.feature.storage.storage
// requires game.feature.party.party

export {};

declare global {
    namespace sc {
        interface CommonEvents extends ig.GameAddon {
            startCallEvent(this: this, event: string): void;
        }
        interface CommonEventsConstructor extends ImpactClass<CommonEvents> {}
        let CommonEvents: CommonEventsConstructor;
        let commonEvents: CommonEvents;
    }
}