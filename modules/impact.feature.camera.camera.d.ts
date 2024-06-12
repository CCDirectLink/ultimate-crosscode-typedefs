// requires impact.base.event
// requires impact.base.game


export {}

declare global {
    namespace ig {
        interface Camera extends ig.GameAddon {
            _currentPos: Vec2
            _currentZoomPos: Vec2
            targets: {
                _currentOffset: Vec2
                _currentZoomOffset: Vec2
            }[]
        }
        interface CameraConstructor extends ImpactClass<ig.Camera> {
            new (): ig.Camera
        }
        var Camera: ig.CameraConstructor
        var camera: ig.Camera
    }
}
