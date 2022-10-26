input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Forever)
    music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
    basic.showIcon(IconNames.SmallHeart)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Heart)
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.OnceInBackground)
    music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.OnceInBackground)
    basic.showIcon(IconNames.SmallHeart)
    basic.clearScreen()
})
basic.showIcon(IconNames.Heart)
let melody = "C D E F G A B C5"
basic.forever(function () {
	
})
