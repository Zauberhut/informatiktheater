namespace JoyPiAdvanced {
    const joystickButtonPin = DigitalPin.P16;

    /**
     * Returns the current X-value of the joystick
     */
    //% block="joystick X value"
    //% subcategory="Joystick"
    //% weight=100
    export function joystickGetXValue(): number {
        return pins.analogReadPin(AnalogPin.P2); // Korrigiert zu pins.analogReadPin()
    }

    /**
     * Returns the current Y-value of the joystick
     */
    //% block="joystick Y value"
    //% subcategory="Joystick"
    //% weight=90
    export function joystickGetYValue(): number {
        return pins.analogReadPin(AnalogPin.P1); // Korrigiert zu pins.analogReadPin()
    }

    /**
     * Checks the current button state of the joystick. True means that the button is pressed. False means that the button is not pressed.
     */
    //% block="joystick button state"
    //% subcategory="Joystick"
    //% weight=80
    export function joystickCheckButton(): boolean {
        return !pins.digitalReadPin(joystickButtonPin);
    }
}
