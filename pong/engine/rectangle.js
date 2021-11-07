class Rectangle extends RenderObject {

    /**
     * 
     * @param {Position} position 
     * @param {RectangularDimensions} dimensions
     * @param {Color} color 
     */
    constructor(position, dimensions, fillcolor = Color.transparent, strokecolor = Color.transparent) {
        super()
        this.position = position
        this.dimensions = dimensions
        this.convexRect = dimensions
        this.fillcolor = fillcolor
        this.strokecolor = strokecolor
    }

    /**
     * 
     * @param {CanvasRenderingContext2D} context 
     */
    render(context) {
        context.fillStyle = this.fillcolor.toString()
        context.strokeStyle = this.strokecolor.toString()

        context.fillRect(this.absolutePosition.x, this.absolutePosition.y, this.dimensions.width, this.dimensions.height)
        context.strokeRect(this.absolutePosition.x, this.absolutePosition.y, this.dimensions.width, this.dimensions.height)
    }

}