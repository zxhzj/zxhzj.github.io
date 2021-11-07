class Color {

    static get transparent() {
        return new Color(0, 0, 0, 0)
    }

    static get white() {
        return new Color(255, 255, 255, 255)
    }

    static get black() {
        return new Color(0, 0, 0, 255)
    }

    constructor(r, g, b, a) {
        this.r = r
        this.g = g
        this.b = b
        this.a = a
    }

    toString() {
        return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`
    }
}