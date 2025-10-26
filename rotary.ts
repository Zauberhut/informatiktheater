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
    // Pins
    const rotaryDTPin = DigitalPin.P14
    const rotaryCLKPin = DigitalPin.P13
    const rotarySWPin = DigitalPin.P16

    // Events
    const KYEventID = 3100

    // Decoder-Parameter
    const stepsPerDetent = 4    // viele Encoder liefern 4 Teilschritte pro Rastung
    const sampleMs = 1          // Polling-Intervall in Millisekunden
    const invertDirection = false // auf true setzen, wenn Drehrichtung vertauscht ist

    // Interner Status für Quadratur-Decoder
    let prevState = 0           // vorheriger 2-Bit-Zustand (A=CLK, B=DT)
    let stepAccumulator = 0     // sammelt Teilschritte bis zur Rastung

    // Debounce für Taster
    const pressDebounceMs = 30
    let lastPressMs = 0

    // Quadratur-Übergangs-Tabelle (Gray-Code Decoder)
    // Index: (prevState << 2) | currState, Werte: -1, 0, +1
    // Reihenfolge der Bits: A=CLK (MSB), B=DT (LSB) im 2-Bit State
    const transTable: number[] = [
        // prev=0: 00->00,01,10,11
         0, +1, -1,  0,
        // prev=1: 01->00,01,10,11
        -1,  0,  0, +1,
        // prev=2: 10->00,01,10,11
        +1,  0,  0, -1,
        // prev=3: 11->00,01,10,11
         0, -1, +1,  0
    ]

    // Starte stabile, synchrone Auswertung in Hintergrundschleife
    function startDecoderLoop() {
        control.inBackground(function () {
            while (true) {
                const a = pins.digitalReadPin(rotaryCLKPin) & 1 // A = CLK
                const b = pins.digitalReadPin(rotaryDTPin) & 1  // B = DT
                const currState = (a << 1) | b

                const idx = (prevState << 2) | currState
                const delta = transTable[idx]

                if (delta !== 0) {
                    // Optional Richtung invertieren
                    const signedDelta = invertDirection ? -delta : delta
                    stepAccumulator += signedDelta

                    // Eine volle Rastung erreicht?
                    if (stepAccumulator >= stepsPerDetent) {
                        control.raiseEvent(KYEventID + JoyPiAdvancedDirection.clockwise, JoyPiAdvancedDirection.clockwise)
                        stepAccumulator = 0
                    } else if (stepAccumulator <= -stepsPerDetent) {
                        control.raiseEvent(KYEventID + JoyPiAdvancedDirection.counterclockwise, JoyPiAdvancedDirection.counterclockwise)
                        stepAccumulator = 0
                    }
                }

                prevState = currState
                basic.pause(sampleMs) // 1 ms Polling – stabil und CPU-schonend
            }
        })
    }

    /**
     * Drehknopf initialisieren (robuste Quadratur-Auswertung)
     */
    //% block="Drehknopf initialisieren"
    //% block.loc.en="initialize Rotary Encoder"
    //% subcategory="Drehknopf"
    //% weight=150
    export function initializeRotaryEncoder() {
        led.enable(false)

        // WICHTIG: Pull-Ups auf BEIDEN Kanälen und dem Taster
        pins.setPull(rotaryCLKPin, PinPullMode.PullUp)
        pins.setPull(rotaryDTPin, PinPullMode.PullUp)
        pins.setPull(rotarySWPin, PinPullMode.PullUp)

        // Startzustand erfassen, bevor die Schleife startet
        const a0 = pins.digitalReadPin(rotaryCLKPin) & 1
        const b0 = pins.digitalReadPin(rotaryDTPin) & 1
        prevState = (a0 << 1) | b0
        stepAccumulator = 0

        // Hintergrund-Decoder starten
        startDecoderLoop()
    }

    /**
     * Wenn der Drehknopf nach einer Richtung gedreht wird
     * @param direction Richtung, auf die gehört wird
     */
    //% block="Wenn der Drehknopf nach %direction gedreht wird"
    //% block.loc.en="on rotary encoder turned %direction"
    //% subcategory="Drehknopf"
    //% weight=100
    export function onRotaryEncoderTurned(direction: JoyPiAdvancedDirection, handler: () => void) {
        control.onEvent(KYEventID + direction, direction, handler)
    }

    /**
     * Wenn der Drehknopf gedrückt wird (mit Debounce)
     */
    //% block="Wenn der Drehknopf gedrückt wird"
    //% block.loc.en="on rotary encoder pressed"
    //% subcategory="Drehknopf"
    //% weight=90
    export function onRotaryEncoderPressed(handler: () => void) {
        pins.onPulsed(rotarySWPin, PulseValue.Low, function () {
            const now = control.millis()
            if (now - lastPressMs > pressDebounceMs) {
                lastPressMs = now
                handler()
            }
        })
    }
}
