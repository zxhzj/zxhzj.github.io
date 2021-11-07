class FPSVisualizer extends RenderObject {

    position = new Position(0, 15, Number.POSITIVE_INFINITY)

    /**
     * 
     * @param {Number} deltaTime 
     */
    update(deltaTime) {
        this.fps = 1000 / deltaTime
    }

    /**
     * 
     * @param {CanvasRenderingContext2D} context 
     */
    render(context) {
        context.fillStyle = "#ff0000ff"
        context.font = "15px Arial"
        context.fillText(this.fps.toFixed(0), this.absolutePosition.x, this.absolutePosition.y)
    }
}