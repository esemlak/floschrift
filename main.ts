input.onButtonPressed(Button.A, function () {
    x = randint(0, 4)
    y = randint(0, 4)
    while (x == y) {
        y = randint(0, 4)
    }
    sprite = game.createSprite(x, y)
    sprite.turn(Direction.Right, 45)
    while (true) {
        sprite.move(1)
        sprite.ifOnEdgeBounce()
        basic.pause(100)
    }
})
let sprite: game.LedSprite = null
let y = 0
let x = 0
basic.showString("Hallo Florian!")
basic.showIcon(IconNames.Happy)
basic.forever(function () {
	
})
