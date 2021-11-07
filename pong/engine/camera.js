/**
 * The Camera does not render its children, it only moves them around on the canvas.
 * The cameras position point is the origin (0, 0) of the rendered content.
 */
class Camera extends RenderObject {

    screenshake = false

    /**
     * Moves the camera. No recalculation of collisions are necessary as this is only a visual update.
     * @param {Vector2} vector 
     */
    move(vector) {
        this.position.move(vector)
    }

    /**
     * 
     * @param {Vector2} strengthAndDirection 
     * @param {Number} duration Total screenshake duration in ms
     */
    performScreenshake(strengthAndDirection, duration = 100) {
        this.screenshake = {
            vector: strengthAndDirection.clone(),
            remainingTime: duration,
            calls: 0
        }
    }

    /**
     * 
     * @param {Number} deltaTime 
     */
    update(deltaTime) {
        super.update(deltaTime)

        if (this.screenshake) {
            this.screenshake.vector.negate()
            this.move(this.screenshake.vector)
            this.screenshake.remainingTime -= deltaTime
            this.screenshake.calls++
            if (this.screenshake.remainingTime <= 0 && this.screenshake.calls % 2 == 0) {
                this.screenshake = false
            }
        }
    }
}
