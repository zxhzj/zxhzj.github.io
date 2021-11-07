/**
 * A Canvas manager that stores, updates and draws RenderObjects and provides helpful functionality.
 */
class Canvas {

    /**
     * Creates a new Canvas managing the given DOM Node.
     * 
     * @param {HTMLCanvasElement} canvasNode 
     * @param {RectangularDimensions} dimensions
     */
    constructor(canvasNode, dimensions) {
        this.node = canvasNode
        this.context = canvasNode.getContext('2d')
        this.content = new RootRenderObject(this)
        this.lastFrameTime = NaN
        this.startTime = NaN
        this.dimensions = dimensions
        this.node.width = dimensions.width
        this.node.height = dimensions.height
    }

    /**
     * Adds a RenderObject as child node of the canvas manager.
     * 
     * @param {RenderObject} obj 
     */
    appendChild(obj) {
        this.content.appendChild(obj)
    }

    /**
     * Recursivly finds the RenderObjects matching the given predicate.
     * @param {(object:RenderObject) => Boolean} matcher 
     * @returns {Array<RenderObject>}
     */
    findComponent(matcher) {
        return this.content.findComponent(matcher)
    }

    run() {
        requestAnimationFrame(this.onAnimationFrame.bind(this))
    }

    /**
     * Called every frame to update and redraw the canvas and its children.
     * 
     * @param {Number} time 
     */
    onAnimationFrame(time) {
        if (Number.isNaN(this.lastFrameTime)) {
            // First frame
            this.startTime = time
        } else {
            const deltaTime = time - this.lastFrameTime
            this.handleFrameUpdate(deltaTime)
        }
        
        this.lastFrameTime = time
        this.run()
    }

    handleFrameUpdate(deltaTime) {
        this.content.update(deltaTime)
        this.context.clearRect(0, 0, this.node.width, this.node.height)
        
        const objects = this.content.prepareRender(this.dimensions)
        const collider = objects.filter(o => o.isCollider === true)
        const moving = collider.filter(o => o.isStatic === false)

        moving.forEach(m => collider.forEach(c => {
            if (m !== c && m.isColliding(c)) {
                m.onCollision(c)

                // If c is not an element of moving, this collision has to be reported to c here.
                if (c.isStatic === true) c.onCollision(m)
            }
        }))

        objects.sort((a, b) => a.position.z - b.position.z)
               .forEach(obj => obj.render(this.context))
    }
}
