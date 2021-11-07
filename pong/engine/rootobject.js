class RootRenderObject extends RenderObject {

    /**
     * 
     * @param {Canvas} canvas 
     */
    constructor(canvas) {
        super()
        this.parent = canvas
    }
}