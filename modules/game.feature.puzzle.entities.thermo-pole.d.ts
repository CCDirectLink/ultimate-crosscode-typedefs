// requires impact.base.entity
// requires impact.feature.effect.effect-sheet
// requires game.feature.combat.combat-poi

export {};

declare global {
    namespace sc {
        namespace ElementPoleGroups {
            interface Group {
                currentBall: ig.ENTITY.Ball | null;
                hitCount: number;
                poles: ig.ENTITY.ElementPole[];
            }
        }

        interface ElementPoleGroups {
            getGroup(group: string): ElementPoleGroups.Group;
            onPoleHit(pole: ig.ENTITY.ElementPole, ball: ig.ENTITY.Ball, alreadyHit: boolean): boolean;
            onCancelCheck(pole: ig.ENTITY.ElementPole): boolean;
        }
        let ElementPoleGroups: ElementPoleGroups;
    }

    namespace ig.ENTITY {
        namespace ElementPole {
            interface Charge {
                element: sc.ELEMENT;
            }
        }
        interface ElementPole extends ig.AnimatedEntity {
            group: string;
            charge: ElementPole.Charge;

            ballHit(this: this, ball: ig.ENTITY.Ball): boolean;
        }
        interface ElementPoleConstructor extends ImpactClass<ElementPole> {}
        let ElementPole: ElementPoleConstructor
    }
}