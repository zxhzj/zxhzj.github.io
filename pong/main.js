document.addEventListener('DOMContentLoaded', e => {
    const canvasNode = document.querySelector('canvas')
    const s = new RectangularDimensions(800, 400)
    const canvasManager = new Canvas(canvasNode, s)
    const keyListener = new KeyInputListener()
    const websocketManager = new WebsocketManager()
    const camera = new Camera()
    const upperwall = new Wall(new Position(), new RectangularDimensions(s.width, 20), Color.black)
    const lowerwall = new Wall(new Position(0, s.height - 20), new RectangularDimensions(s.width, 20), Color.black)
    const ball = new Ball(s.mid.move(new Vector2(-5, -5)), new RectangularDimensions(10, 10), Color.black)
    const playerHeight = s.height / 4, playerMargin = 5, playerWidth = 20
    const player1 = new LocalPlayer(new Position(playerMargin, s.mid.y - playerHeight / 2), new RectangularDimensions(playerWidth, playerHeight), new Color(10, 20, 70, 255))
    const player2 = new Enemy(new Position(s.width - playerMargin - playerWidth, s.mid.y - playerHeight / 2), new RectangularDimensions(playerWidth, playerHeight), new Color(70, 20, 10, 255))
    
    const win = player => o => {
        if (o instanceof Ball && isRunning) {
            camera.performScreenshake(new Vector2(5, 1), 200)
            console.log(player + " win(s)")
            websocketManager.send({type: 'finished', winner: websocketManager.user})
            isRunning = false
        }
    }

    const trigger1 = new LossTrigger(win("The enemy"), new Position(), new RectangularDimensions(2, s.height), Color.black)
    const trigger2 = new LossTrigger(win("You"), new Position(s.width - 2, 0), new RectangularDimensions(2, s.height), Color.black)

    camera.appendChild(upperwall, lowerwall, ball, player1, player2, trigger1, trigger2)
    websocketManager.appendChild(camera)
    keyListener.appendChild(websocketManager)
    canvasManager.appendChild(keyListener, new FPSVisualizer())

    canvasManager.run()
    keyListener.listen()
    websocketManager.listen()

    let isRunning = true
})