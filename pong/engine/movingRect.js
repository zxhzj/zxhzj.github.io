class MovingRectangle extends Rectangle {
    /**
     * The velocity of the ball in pixel per second
     * @type {Vector2}
     */
    velocity = Vector2.zero

    /**
     * @type {Boolean}
     */
    isStatic = false

    update(deltaTime) {
        super.update(deltaTime)
        this.position.move(this.velocity.clone().scale(deltaTime / 1000))
    }
}