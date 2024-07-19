function Start_Game () {
    scene.setBackgroundColor(9)
    Wisp = sprites.create(img`
        . . . f f f . . . . . . . . . . 
        . . f 2 2 2 f f . . . . . . . . 
        . . f 2 4 2 2 2 f f . . . . . . 
        . . f 2 2 4 4 4 2 2 f . . . . . 
        . . . f 2 2 4 4 4 2 2 f . . . . 
        . . . f 2 2 4 4 4 4 4 2 f . . . 
        . . . . f 2 4 4 5 5 5 5 2 f . . 
        . . . f 2 4 4 5 f 5 f 5 4 2 f . 
        . . . f 2 4 4 5 f 5 f 5 4 2 f . 
        . . . f 2 4 4 5 f 5 f 5 4 2 f . 
        . . . f 2 2 4 5 5 5 5 5 4 2 f . 
        . . . f 2 2 4 4 5 5 5 4 4 2 f . 
        . . . . f 2 2 4 4 4 4 4 2 f . . 
        . . . . . f 2 2 2 2 2 2 f . . . 
        . . . . . f 2 f . f 2 f . . . . 
        . . . . . f 2 2 f f 2 2 f . . . 
        `, SpriteKind.Player)
}
let Wisp: Sprite = null
Start_Game()
