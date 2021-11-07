/**
 * A 2-dimensional vector.
 */
class Vector2 {

    static get zero() {
        return new Vector2(0, 0)
    }

    /**
     * 
     * @param {Number} x 
     * @param {Number} y 
     */
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    negate() {
        return this.scale(-1)
    }

    /** @param {Number} factor */
    scaleX(factor) {
        this.x *= factor
        return this
    }

    /** @param {Number} factor */
    scaleY(factor) {
        this.y *= factor
        return this
    }

    /** @param {Number} factor */
    scale(factor) {
        return this.scaleX(factor).scaleY(factor)
    }

    /**
     * @param {Vector2} vector 
     */
    add(vector) {
        this.x += vector.x
        this.y += vector.y
        return this
    }

    /**
     * @param {Vector2} vector 
     */
    subtract(vector) {
        return this.add(vector.clone().negate())
    }

    /**
     * 
     * @returns {Vector2}
     */
    clone() {
        return new Vector2(this.x, this.y)
    }
}