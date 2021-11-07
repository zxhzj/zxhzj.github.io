class RectangularDimensions {
    /**
     * 
     * @param {Number} width 
     * @param {Number} height 
     */
    constructor(width = 0, height = 0) {
        this.width = width
        this.height = height
    }

    /**
     * @type {Position} 
     */
    get mid() {
        return new Position(this.width / 2, this.height / 2)
    }

    /**
     * 
     * @param {Position} pos1 
     * @param {RectangularDimensions} dim1 
     * @param {Position} pos2 
     * @param {RectangularDimensions} dim2 
     * @returns {Boolean} Whether both rectangles intersect or not
     */
    static intersect(pos1, dim1, pos2, dim2) {
        const right1  = pos1.x + dim1.width
        const bottom1 = pos1.y + dim1.height
        const right2  = pos2.x + dim2.width
        const bottom2 = pos2.y + dim2.height
        return (
            pos1.x <= right2  &&
            pos2.x <= right1  &&
            pos1.y <= bottom2 &&
            pos2.y <= bottom1
        )
    }
}