// requires impact.base.action
// requires impact.base.event
// requires game.feature.player.player-model
// requires game.feature.model.game-model

export { }

declare global {
    namespace ig {
        namespace EVENT_STEP {
            interface SET_PLAYER_CORE extends ig.EventStepBase {
                core: sc.PLAYER_CORE
                value: any 
            }
            interface SET_PLAYER_COREConstructor extends ImpactClass<SET_PLAYER_CORE> {
                new(settings: { core: sc.PLAYER_CORE, value: any }): SET_PLAYER_CORE
            }
            var SET_PLAYER_CORE: SET_PLAYER_COREConstructor
        }
    }
}
