input.onButtonPressed(Button.A, function () {
    if (input.temperature() > 22) {
        basic.showString("Calor")
    } else {
        basic.showString("Frio")
    }
})
input.onButtonPressed(Button.B, function () {
    llum = input.lightLevel()
    if (llum < 50) {
        music.play(music.stringPlayable("E D G F B A C5 B ", 120), music.PlaybackMode.UntilDone)
    } else if (llum > 200) {
        music.play(music.stringPlayable("E B C5 A B G A F ", 120), music.PlaybackMode.UntilDone)
    }
})
let llum = 0
basic.showIcon(IconNames.Heart)
