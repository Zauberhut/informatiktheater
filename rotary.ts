const enum JoyPiAdvancedDirection {
    //% block="Right"
    //% block.loc.de="rechts"
    clockwise = 2,
    //% block="Left"
    //% block.loc.de="links"
    counterclockwise = 4
}

namespace Informatiktheater {
    const rotaryDTPin = DigitalPin.P2;
    const rotaryCLKPin = DigitalPin.P1;
    const rotarySWPin = DigitalPin.P14;
    const KYEventID = 3100;
    let directionIndicator = 1;
    let currentCLK = 0;
    let currentDT = 0;
    let lastCLK = 0;
    let EvCounter = 1;
    let lastPressed = 1;
    let pressedID = 5600;

    // Function to decide the direction in which the Encoder is being turned
   function RotaryEncoder() {
    if (currentCLK != lastCLK) {
        directionIndicator = (currentDT != currentCLK) ? 1 : 0;

        EvCounter += 1;
        if (EvCounter % 2 == 0) { // Reduce event flooding
            const eventDirection = directionIndicator == 1 
                ? JoyPiAdvancedDirection.clockwise 
                : JoyPiAdvancedDirection.counterclockwise;
                
            control.raiseEvent(KYEventID + eventDirection, eventDirection);
        }
        lastCLK = currentCLK;
    }
}


    /** 
      * Initializes the rotary encoder
      */
    //% block="initialize Rotary Encoder"
    //% block.loc.de="Drehknopf initialisieren"
    //% subcategory="Drehknopf"
    //% weight=10
    export function initializeRotaryEncoder() {
        led.enable(false)

        pins.setPull(rotaryDTPin, PinPullMode.PullUp);
        pins.setPull(rotarySWPin, PinPullMode.PullUp);
        // Interrupt the code on a rising edge on the rotaryCLKPin to execute the RotaryEncoder() function
        pins.onPulsed(rotaryCLKPin, PulseValue.High, function () {
            currentCLK = 1
            RotaryEncoder()

        })

        // Interrupt the code on a falling edge on the rotaryCLKPin to execute the RotaryEncoder() function
        pins.onPulsed(rotaryCLKPin, PulseValue.Low, function () {
            currentCLK = 0
            RotaryEncoder()

        })

        pins.onPulsed(rotaryDTPin, PulseValue.High, function () {
            currentDT = 1

        })

        // Interrupt the code on a falling edge on the rotaryCLKPin to execute the RotaryEncoder() function
        pins.onPulsed(rotaryDTPin, PulseValue.Low, function () {
            currentDT = 0

        })

    }

     /**
      * Event that is executed as soon as the rotary encoder is turned in the corresponding direction
      * @param JoyPiAdvancedDirection  Direction to be listened to
      */
    //% block="on rotary encoder turned in direction %direction"
    //% block.loc.de="Wenn der Drehknopf nach %direction gedreht wird"
    //% subcategory="Drehknopf"
    //% weight=100
    export function rotaryEncoderonTurned(direction: JoyPiAdvancedDirection , handler: () => void) {
        control.onEvent(KYEventID + direction, direction, handler);
    }

    /**
     * Event that is executed as soon as the rotary encoder is pressed
     */
    //% block="on rotary encoder pressed"
    //% block.loc.de="Wenn der Drehknopf gedrückt wird"
    //% subcategory="Drehknopf"
    //% weight=90
    export function rotaryEncoderonPressEvent(handler: () => void) {
        pins.onPulsed(rotarySWPin, PulseValue.Low, function () {
            handler()
        })
    }

}
