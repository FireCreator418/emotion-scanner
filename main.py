Emotion = 0

def on_forever():
    global Emotion
    Emotion = randint(1, 9)
    while input.button_is_pressed(Button.AB):
        Emotion = randint(1, 9)
        basic.show_leds("""
            # # # # #
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            """)
        basic.show_leds("""
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            . . . . .
            """)
        basic.show_leds("""
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            """)
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            """)
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            """)
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            """)
        basic.show_leds("""
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . # . .
            """)
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            """)
        basic.show_leds("""
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . # . .
            """)
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            """)
        basic.show_leds("""
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . # . .
            """)
        if Emotion == 1:
            basic.show_icon(IconNames.HAPPY)
        elif Emotion == 2:
            basic.show_icon(IconNames.SAD)
        elif Emotion == 3:
            basic.show_icon(IconNames.CONFUSED)
        elif Emotion == 4:
            basic.show_icon(IconNames.ANGRY)
        elif Emotion == 5:
            basic.show_icon(IconNames.ASLEEP)
        elif Emotion == 6:
            basic.show_icon(IconNames.SURPRISED)
        elif Emotion == 7:
            basic.show_icon(IconNames.SILLY)
        elif Emotion == 8:
            basic.show_icon(IconNames.FABULOUS)
        elif Emotion == 9:
            basic.show_icon(IconNames.MEH)
        basic.pause(2000)
        basic.clear_screen()
basic.forever(on_forever)
