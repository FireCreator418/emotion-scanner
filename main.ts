let Emotion = 0
basic.forever(function () {
    Emotion = randint(1, 9)
    while (input.buttonIsPressed(Button.AB)) {
        Emotion = randint(1, 9)
        basic.showLeds(`
            # # # # #
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . # . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . # . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . # . .
            `)
        if (Emotion == 1) {
            basic.showIcon(IconNames.Happy)
        } else if (Emotion == 2) {
            basic.showIcon(IconNames.Sad)
        } else if (Emotion == 3) {
            basic.showIcon(IconNames.Confused)
        } else if (Emotion == 4) {
            basic.showIcon(IconNames.Angry)
        } else if (Emotion == 5) {
            basic.showIcon(IconNames.Asleep)
        } else if (Emotion == 6) {
            basic.showIcon(IconNames.Surprised)
        } else if (Emotion == 7) {
            basic.showIcon(IconNames.Silly)
        } else if (Emotion == 8) {
            basic.showIcon(IconNames.Fabulous)
        } else if (Emotion == 9) {
            basic.showIcon(IconNames.Meh)
        }
        basic.pause(2000)
        basic.clearScreen()
    }
})
