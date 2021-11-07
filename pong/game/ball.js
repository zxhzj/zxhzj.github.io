class Ball extends MovingRectangle {
    isCollider = true
    initialVelocity = new Vector2(100, 100)

    onCollision(other) {
        if (other instanceof Wall) {
            this.velocity.scaleY(-1)
        }

        if (other instanceof Player) {
            this.velocity.scaleX(-1)
        }
    }

    onWebsocketMessage(data) {
        if (data.type === 'login' && data.user === 1) {
            this.initialVelocity.scaleX(-1)
        }

        if (data.type === 'start') {
            this.velocity = this.initialVelocity
        }
    }
}
