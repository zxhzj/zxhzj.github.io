/**
 * Represents a position on the canvas. Positions are relative to their parent.
 */
class Position {

    /**
     * 
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} z 
     */
    constructor(x = 0, y = 0, z = 0) {
        this.x = x
        this.y = y
        this.z = z
    }

    /**
     * Alters the position by the values provided as 2-dimensional vector and additional z-coordinate.
     * 
     * @param {Vector2} vector 
     * @param {Number} z
     */
    move(vector, z = 0) {
        this.x += vector.x
        this.y += vector.y
        this.z += z
        return this
    }

    /**
     * 
     * @param {Position} pos1 
     * @param {Position} pos2 
     */
    static relative(pos1, pos2) {
        return new Position(
            pos1.x + pos2.x, 
            pos1.y + pos2.y, 
            pos1.z + pos2.z
        )
    }
}