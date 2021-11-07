class Enemy extends Player {

    remoteKeymap = {
        'w': this.moveUp,
        's': this.moveDown
    }

    onWebsocketMessage(data) {
        super.onWebsocketMessage(data)

        if (data.type === 'keyDown') {
            this.remoteKeymap[data.key]?.call(this)
        }

        if (data.type === 'keyUp') {
            if (Object.keys(this.remoteKeymap).includes(data.key)) {
                this.stop()
            }
        }
    }

}