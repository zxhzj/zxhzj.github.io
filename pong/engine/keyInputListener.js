class KeyInputListener extends EventEmitter {
    listen() {
        addEventListener('keydown', this.onKeyDown.bind(this))
        addEventListener('keyup', this.onKeyUp.bind(this))
    }
}