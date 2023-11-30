function ranbow (num: number) {
    strip.showRainbow(1, 360)
    for (let index = 0; index < 12; index++) {
        strip.rotate(1)
        basic.pause(num)
        strip.show()
    }
}
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 18, NeoPixelMode.RGB)
basic.forever(function () {
    ranbow(100)
})
