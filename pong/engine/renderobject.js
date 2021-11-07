/**
 * An object that can be updated and rendered by the canvas manager
 */
class RenderObject {

    /** @type {boolean} */
    isActive = true

    /** @type {boolean} */
    isVisible = true
    
    /**
     * By default every render object is static meaning it can not be moved by physics 
     * and collisions of it with other static objects are not possible.
     * @type {Boolean}
     */
    isStatic = true

    /** @type {Boolean} */
    isCollider = false

    /** @type {Array<RenderObject>} */
    children = []

     /** @type {RenderObject | Canvas} */
    parent = null

    /** @type {Position} */
    position = new Position()

    /** @type {RectangularDimensions} */
    convexRect = new RectangularDimensions()

    /** 
     * Is computed before every render.
     * @type {Position}
     */
    absolutePosition = null

    /**
     * Appends a renderObject as child of this object. Updates the childs parent.
     * 
     * @param {RenderObject} renderobjects 
     */
    appendChild(...renderobjects) {
        this.children.push(...renderobjects)
        renderobjects.forEach(o => {o.parent = this})
    }
    
    /**
     * Recursivly finds the RenderObjects matching the given predicate.
     * @param {(object:RenderObject) => Boolean} matcher 
     * @returns {Array<RenderObject}
     */
    findComponent(matcher) {
        let matches = matcher(this) ? [this] : []
        this.children.forEach(c => {
            matches = matches.concat(c.findComponent(matcher))
        })
        return matches
    }

    /**
     * 
     * @param {Number} deltaTime 
     */
    update(deltaTime) {
        this.children
            .filter(obj => obj.isActive)
            .forEach(obj => void obj.update(deltaTime))
    }

    /**
     * @param {RectangularDimensions} renderDimensions The dimensions of the visible area, starting at (0, 0)
     * @param {Position} offset The offset of the parent objects to calculate the absolute position
     * @returns {Array<RenderObject>} This element and all its visible children that are on the screen
     */
    prepareRender(renderDimensions, offset = new Position()) {
        this.absolutePosition = Position.relative(this.position, offset)
        let flatChildList = this.isOnScreen(renderDimensions) ? [this] : []
        for (let c of this.children.filter(obj => obj.isVisible)) {
            flatChildList = c.prepareRender(renderDimensions, this.absolutePosition).concat(flatChildList)
        }
        return flatChildList
    }

    /**
     * @param {RectangularDimensions} renderDimensions The dimensions of the visible area, starting at (0, 0)
     * @returns {Boolean} Whether this renderObject is in the visible area or not
     */
    isOnScreen(renderDimensions) {
        return RectangularDimensions.intersect(this.absolutePosition, this.convexRect, new Position(), renderDimensions)
    }

    /**
     * 
     * @param {RenderObject} other 
     * @returns {Boolean} Whether this object collides with the other object or not
     */
    isColliding(other) {
        return RectangularDimensions.intersect(this.absolutePosition, this.convexRect, other.absolutePosition, other.convexRect)
    }

    /**
     * 
     * @param {RenderObject} other 
     */
    onCollision(other) {}

    /**
     * 
     * @param {CanvasRenderingContext2D} context 
     */
    render(context) {}

    /**
     * 
     * @param {KeyboardEvent} event 
     */
    onKeyDown(event) {
        this.children.forEach(c => c.onKeyDown(event))
    }

    /**
     * 
     * @param {KeyboardEvent} event 
     */
    onKeyUp(event) {
        this.children.forEach(c => c.onKeyUp(event))
    }

    onWebsocketMessage(data) {
        this.children.forEach(c => c.onWebsocketMessage(data))
    }
}