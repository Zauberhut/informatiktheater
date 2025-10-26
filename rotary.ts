const enum JoyPiAdvancedDirection {
    //% block="Right"
    //% block.loc.de="rechts"
    clockwise = 2,
    //% block="Left"
    //% block.loc.de="links"
    counterclockwise = 4
}

//% weight=110 color=#3a4cf7
namespace informatiktheater {
    const rotaryDTPin = DigitalPin.P14;
    const rotaryCLKPin = DigitalPin.P13;
    const rotarySWPin = DigitalPin.P16;
    const KYEventID = 3100;

    let directionIndicator = 1;
    let currentCLK = 0;
    let currentDT = 0;
    let lastCLK = 0;
    let EvCounter = 1;
    const debounceDelay = 25; // Debounce delay in milliseconds
    let lastDebounceTime = 0;

    // Function to decide the direction in which the Encoder is being turned
    function RotaryEncoder() {
        const currentTime = control.millis();
        
        // Check for debounce
        if (currentTime - lastDebounceTime > debounceDelay) {
            if (currentCLK != lastCLK) {
                // Determine direction based on currentDT and currentCLK
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
            lastDebounceTime = currentTime; // Update last debounce time
        }
    }

    /** 
      * Initializes the rotary encoder
      */
    //% block="initialize Rotary Encoder"
    //% block.loc.de="Drehknopf initialisieren"
    //% subcategory="Drehknopf"
    //% weight=150
    export function initializeRotaryEncoder() {
        led.enable(false);

        pins.setPull(rotaryDTPin, PinPullMode.PullUp);
        pins.setPull(rotarySWPin, PinPullMode.PullUp);

        // Interrupt on rising edge of rotaryCLKPin
        pins.onPulsed(rotaryCLKPin, PulseValue.High, function () {
            currentCLK = 1;
            RotaryEncoder();
        });

        // Interrupt on falling edge of rotaryCLKPin
        pins.onPulsed(rotaryCLKPin, PulseValue.Low, function () {
            currentCLK = 0;
            RotaryEncoder();
        });

        // Interrupt on rising edge of rotaryDTPin
        pins.onPulsed(rotaryDTPin, PulseValue.High, function () {
            currentDT = 1;
        });

        // Interrupt on falling edge of rotaryDTPin
        pins.onPulsed(rotaryDTPin, PulseValue.Low, function () {
            currentDT = 0;
        });
    }

    /**
      * Event that is executed as soon as the rotary encoder is turned in the corresponding direction
      * @param JoyPiAdvancedDirection Direction to be listened to
      */
    //% block="on rotary encoder turned in direction %direction"
    //% block.loc.de="Wenn der Drehknopf nach %direction gedreht wird"
    //% subcategory="Drehknopf"
    //% weight=100
    export function onRotaryEncoderTurned(direction: JoyPiAdvancedDirection, handler: () => void) {
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
            handler();
        });
    }
}
