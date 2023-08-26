// requires impact.base.actor-entity
// requires impact.base.entity
// requires game.feature.puzzle.components.push-pullable

export {};

declare global {
    namespace ig.ENTITY {
        namespace PushPullBlock {
            interface Settings extends ig.Entity.Settings {

            }
        }
        interface PushPullBlock extends ig.AnimatedEntity {

        }
        interface PushPullBlockConstructor extends ImpactClass<PushPullBlock> {
            new(x: number, y: number, z: number, settings: PushPullBlock.Settings): PushPullBlock;
        }
        let PushPullBlock: PushPullBlockConstructor;


        namespace WavePushPullBlock {
            interface Settings extends ig.Entity.Settings {

            }
        }
        interface WavePushPullBlock extends ig.AnimatedEntity, ig.Entity.Attachable, ig.ENTITY.WaveTeleport.Teleportable {
            phased: boolean;

            ballHit(this: this, ball: ig.ENTITY.Ball): boolean;
            resetPos(this: this, pos?: Optional<Vec3>): void;
        }
        interface WavePushPullBlockConstructor extends ImpactClass<WavePushPullBlock> {
            new(x: number, y: number, z: number, settings: WavePushPullBlock.Settings): WavePushPullBlock;
        }
        let WavePushPullBlock: WavePushPullBlockConstructor;
    }
}