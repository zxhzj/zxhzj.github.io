class Player extends MovingRectangle {
    isCollider = true

    /** @type {Vector2} */
    movementVector = new Vector2(0, 150)

    /** @type {Wall} */
    collidingWall = null

    /** Object with key (Character) -> function */
    keymap = {}

    stop() {
        this.velocity = Vector2.zero
    }

    moveUp() {
        if (!this.collidingWall || this.collidingWall.absolutePosition.y >= this.absolutePosition.y) {
            this.velocity = this.movementVector.clone().negate()
        }
    }

    moveDown() {
        if (!this.collidingWall || this.collidingWall.absolutePosition.y <= this.absolutePosition.y) {
            this.velocity = this.movementVector
        }
    }

    onCollision(other) {
        if (other instanceof Wall) {
            if (!this.collidingWall) this.stop()
            this.collidingWall = other
        }
    }

    update(deltaTime) {
        super.update(deltaTime)
        if (this.collidingWall && !this.isColliding(this.collidingWall)) {
            this.collidingWall = null
        }
    }

    /**
     * 
     * @param {KeyboardEvent} event 
     */
    onKeyDown(event) {
        super.onKeyDown(event)
        this.keymap[event.key]?.call(this)
    }

    /**
     * 
     * @param {KeyboardEvent} event 
     */
    onKeyUp(event) {
        super.onKeyUp(event)
        
        if (Object.keys(this.keymap).includes(event.key)) {
            this.stop()
        }
    }
}