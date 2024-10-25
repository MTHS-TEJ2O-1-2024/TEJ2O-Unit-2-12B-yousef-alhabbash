/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mr. Yousef
 * Created on: OCT 2024
 * This program find distance to object if more then 10cm green light if less red light
*/

// variables
let distanceToObject: number = 0
let neopixelStrip: neopixel.Strip = null

// setup
basic.clearScreen()
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.show()
basic.showIcon(IconNames.Happy)

// find distance from sonar
input.onButtonPressed(Button.A, function () {
    distanceToObject = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
    )
   basic.showNumber(distanceToObject)

    // change neoPixel color based on distance
    if (distanceToObject < 10) {
        neopixelStrip.showColor(neopixel.colors(NeoPixelColors.Red))
        neopixelStrip.show()
    } else {
        neopixelStrip.showColor(neopixel.colors(NeoPixelColors.Green))
        neopixelStrip.show()
    }
    
    basic.showIcon(IconNames.Happy)
})

//reset
input.onButtonPressed(Button.B, function () {
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(4, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.show()

    basic.showIcon(IconNames.Happy)
})
