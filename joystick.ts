export enum GroveJoystickKey {
    None = 0,
    Right = 1,
    Left = 2,
    Up = 3,
    Down = 4,
    UL = 5,
    UR = 6,
    LL = 7,
    LR = 8,
    Press = 9
}

const joystickEventID = 123; // Beispielwert
let lastJoystick = GroveJoystickKey.None;

export class GroveJoystick {
    joyread(xPin: AnalogPin, yPin: AnalogPin): number {
        let xdata = 0, ydata = 0, result = 0;
        if (xPin && yPin) {
            xdata = pins.analogReadPin(xPin);
            ydata = pins.analogReadPin(yPin);
            // Logik für die Joystick-Ablesung
        } else {
            result = GroveJoystickKey.None;
        }
        return result;
    }
}

namespace grove {
    export function getJoystick(xpin: AnalogPin, ypin: AnalogPin): number {
        const joystick = new GroveJoystick();
        return joystick.joyread(xpin, ypin);
    }

    export function onJoystick(key: GroveJoystickKey, xpin: AnalogPin, ypin: AnalogPin, handler: () => void) {
        control.onEvent(joystickEventID, key, handler);
        control.inBackground(() => {
            while (true) {
                const key = new GroveJoystick().joyread(xpin, ypin);
                if (key != lastJoystick) {
                    lastJoystick = key; 
                    control.raiseEvent(joystickEventID, lastJoystick);
                }
                basic.pause(50);
            }
        });
    }
}
