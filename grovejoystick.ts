// ===== Enum für Block-Auswahl =====
export enum GroveJoystickKey {
    //% block="Keiner"
    None = 0,
    //% block="Rechts"
    Right = 1,
    //% block="Links"
    Left = 2,
    //% block="Hoch"
    Up = 3,
    //% block="Runter"
    Down = 4,
    //% block="Oben links"
    UL = 5,
    //% block="Oben rechts"
    UR = 6,
    //% block="Unten links"
    LL = 7,
    //% block="Unten rechts"
    LR = 8,
    //% block="Gedrückt"
    Press = 9
}

/**
 * Funktionen für Grove-Module
 */
//% weight=10 color=#9F79EE icon="\uf1b3" block="Grove"
//% groups='["Thumbjoystick"]'
namespace grove {

    const joystickEventID = 3100
    let lastJoystick: GroveJoystickKey = GroveJoystickKey.None
    let joystickWatcherRunning = false

    // Interne Schwellwerte
    const TH_LOW = 400
    const TH_HIGH = 600
    const TH_PRESS = 1000

    /**
     * Interne Erkennung der Joystick-Richtung aus X/Y.
     * Liefert einen GroveJoystickKey.
     */
    //% blockHidden=true
    export function joyreadRaw(xPin: AnalogPin, yPin: AnalogPin): GroveJoystickKey {
        let xdata = pins.analogReadPin(xPin)
        let ydata = pins.analogReadPin(yPin)
        let result = GroveJoystickKey.None

        if (xdata > TH_PRESS) {
            result = GroveJoystickKey.Press
        } else if (xdata > TH_HIGH) {
            if (ydata > TH_HIGH) result = GroveJoystickKey.UR
            else if (ydata < TH_LOW) result = GroveJoystickKey.LR
            else result = GroveJoystickKey.Right
        } else if (xdata < TH_LOW) {
            if (ydata > TH_HIGH) result = GroveJoystickKey.UL
            else if (ydata < TH_LOW) result = GroveJoystickKey.LL
            else result = GroveJoystickKey.Left
        } else {
            if (ydata > TH_HIGH) result = GroveJoystickKey.Up
            else if (ydata < TH_LOW) result = GroveJoystickKey.Down
            else result = GroveJoystickKey.None
        }
        return result
    }

    /**
     * Lies die aktuelle Joystick-Richtung (als Enum).
     */
    //% blockId=grove_getjoystick
    //% block="Joystick Richtung an x %xpin y %ypin"
    //% group="Thumbjoystick"
    //% weight=90
    //% xpin.defl=AnalogPin.P0 ypin.defl=AnalogPin.P1
    export function getJoystick(xpin: AnalogPin = AnalogPin.P0, ypin: AnalogPin = AnalogPin.P1): GroveJoystickKey {
        return joyreadRaw(xpin, ypin)
    }

    /**
     * Wandle einen Joystick-Key in eine Zahl um (für Vergleiche).
     */
    //% blockId=joystickkey
    //% block="Joystick-Key %key als Zahl"
    //% group="Thumbjoystick"
    //% weight=70
    export function joystickkey(key: GroveJoystickKey): number {
        return key as number
    }

    /**
     * Reagiere auf eine erkannte Joystick-Richtung.
     */
    //% blockId=grove_joystick_create_event
    //% block="wenn Joystick %key an x %xpin y %ypin"
    //% group="Thumbjoystick"
    //% weight=80
    //% xpin.defl=AnalogPin.P0 ypin.defl=AnalogPin.P1
    export function onJoystick(key: GroveJoystickKey, xpin: AnalogPin = AnalogPin.P0, ypin: AnalogPin = AnalogPin.P1, handler: () => void) {
        control.onEvent(joystickEventID, key, handler)

        if (!joystickWatcherRunning) {
            joystickWatcherRunning = true
            control.inBackground(() => {
                while (true) {
                    const k = joyreadRaw(xpin, ypin)
                    if (k != lastJoystick) {
                        lastJoystick = k
                        control.raiseEvent(joystickEventID, lastJoystick)
                    }
                    basic.pause(50)
                }
            })
        }
    }

    /**
     * Rohwert X lesen (0..1023).
     */
    //% blockId=grove_joystick_read_x
    //% block="Joystick X an %pin"
    //% group="Thumbjoystick"
    //% weight=60
    export function readX(pin: AnalogPin = AnalogPin.P0): number {
        return pins.analogReadPin(pin)
    }

    /**
     * Rohwert Y lesen (0..1023).
     */
    //% blockId=grove_joystick_read_y
    //% block="Joystick Y an %pin"
    //% group="Thumbjoystick"
    //% weight=50
    export function readY(pin: AnalogPin = AnalogPin.P1): number {
        return pins.analogReadPin(pin)
    }
}
