// requires game.feature.player.entities.player-base

export {};

declare global {
    namespace sc {
        interface PartyMemberEntity extends sc.PlayerBaseEntity {}
        interface PartyMemberEntityConstructor extends ImpactClass<PartyMemberEntity> {}
        var PartyMemberEntity: PartyMemberEntityConstructor
    }
}