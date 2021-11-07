class LossTrigger extends Rectangle {
    isCollider = true

    constructor(callback, ...args) {
        super(...args)
        this.callback = callback
    }

    onCollision(other) {
        this.callback(other)
    }
}