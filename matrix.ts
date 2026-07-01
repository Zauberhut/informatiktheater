/**
 * NeoPixel Matrix Text Display Erweiterung für Micro:bit
 */
//% color=#0078D7 weight=100 icon="\uf0eb" block="NeoPixel Matrix"
namespace neopixelMatrix {
    // Schrift-Daten - 5x3 Pixelmuster für jeden Buchstaben
    const fontData: { [key: string]: number[][] } = {
        'A': [
            [0, 1, 0],
            [1, 0, 1],
            [1, 1, 1],
            [1, 0, 1],
            [1, 0, 1]
        ],
        'B': [
            [1, 1, 0],
            [1, 0, 1],
            [1, 1, 0],
            [1, 0, 1],
            [1, 1, 0]
        ],
        // ... weitere Buchstaben hier definieren
        'Z': [
            [1, 1, 1],
            [0, 0, 1],
            [0, 1, 0],
            [1, 0, 0],
            [1, 1, 1]
        ],
        '0': [
            [0, 1, 0],
            [1, 0, 1],
            [1, 0, 1],
            [1, 0, 1],
            [0, 1, 0]
        ],
        // ... Ziffern und Sonderzeichen
        ' ': [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ],
    };

    let strip: neopixel.Strip = null;
    let matrixBreite = 8;
    let matrixHoehe = 8;
    let matrixLayout = 0; // 0: ZickZack, 1: Sequentielle Reihen
    
    /**
     * Matrix-Layout-Typen
     */
    export enum MatrixLayout {
        //% block="ZickZack"
        ZickZack = 0,
        //% block="Sequentielle Reihen"
        SequentielleReihen = 1
    }
    
    /**
     * Initialisiere eine NeoPixel-Matrix
     * @param pin der Pin, an dem die NeoPixel angeschlossen ist
     * @param breite Breite der Matrix
     * @param hoehe Höhe der Matrix
     * @param layout Verdrahtungslayout der Matrix
     */
    //% blockId=neopixel_matrix_init
    //% block="Initialisiere NeoPixel-Matrix an Pin %pin|mit Breite %breite|und Höhe %hoehe|Layout %layout"
    //% breite.defl=8 hoehe.defl=8
    //% layout.defl=MatrixLayout.ZickZack
    //% weight=100
    export function initialisieren(
        pin: DigitalPin, 
        breite: number, 
        hoehe: number,
        layout: MatrixLayout
    ): void {
        matrixBreite = breite;
        matrixHoehe = hoehe;
        matrixLayout = layout;
        strip = neopixel.create(pin, breite * hoehe, NeoPixelMode.RGB);
        strip.clear();
        strip.show();
    }
    
    /**
     * Helligkeit der NeoPixel-Matrix einstellen
     * @param helligkeit Helligkeit von 0 bis 255
     */
    //% blockId=neopixel_matrix_brightness
    //% block="Setze Matrix-Helligkeit auf %helligkeit"
    //% helligkeit.min=0 helligkeit.max=255
    //% weight=95
    export function setzeHelligkeit(helligkeit: number): void {
        if (!strip) return;
        strip.setBrightness(helligkeit);
        strip.show();
    }
    
    /**
     * Zeige einen Buchstaben auf der NeoPixel-Matrix an
     * @param buchstabe der anzuzeigende Buchstabe
     * @param farbe die Farbe des Buchstabens
     * @param x x-Position (Standard: Mitte)
     * @param y y-Position (Standard: Mitte)
     */
    //% blockId=neopixel_matrix_display_letter
    //% block="Zeige Buchstabe %buchstabe|mit Farbe %farbe||an x %x y %y"
    //% farbe.shadow=neopixel_colors
    //% expandableArgumentMode="toggle"
    //% inlineInputMode=inline
    //% weight=90
    export function zeigeBuchstabe(
        buchstabe: string, 
        farbe: number, 
        x?: number, 
        y?: number
    ): void {
        if (!strip) return;
        
        // Den ersten Buchstaben nehmen und in Großbuchstaben umwandeln
        buchstabe = buchstabe.charAt(0).toUpperCase();
        
        // Buchstabenmuster verwenden oder Leerzeichen, wenn nicht gefunden
        const muster = fontData[buchstabe] || fontData[' '];
        const musterBreite = muster[0].length;
        const musterHoehe = muster.length;
        
        // Position berechnen, wenn nicht angegeben (Mitte)
        if (x === undefined) {
            x = Math.floor((matrixBreite - musterBreite) / 2);
        }
        if (y === undefined) {
            y = Math.floor((matrixHoehe - musterHoehe) / 2);
        }
        
        strip.clear();
        
        // Muster an der angegebenen Position anzeigen
        for (let py = 0; py < musterHoehe; py++) {
            for (let px = 0; px < musterBreite; px++) {
                if (muster[py][px]) {
                    const pixelX = x + px;
                    const pixelY = y + py;
                    
                    if (pixelX >= 0 && pixelX < matrixBreite && 
                        pixelY >= 0 && pixelY < matrixHoehe) {
                        const pixelIndex = getPixelIndex(pixelX, pixelY);
                        if (pixelIndex >= 0) {
                            strip.setPixelColor(pixelIndex, farbe);
                        }
                    }
                }
            }
        }
        
        strip.show();
    }
    
    /**
     * Text auf der NeoPixel-Matrix scrollen lassen
     * @param text der anzuzeigende Text
     * @param farbe die Farbe des Textes
     * @param verzoegerung die Verzögerung zwischen Buchstaben beim Scrollen (ms)
     */
    //% blockId=neopixel_matrix_scroll_text
    //% block="Scrolle Text %text|mit Farbe %farbe|Verzögerung %verzoegerung ms"
    //% farbe.shadow=neopixel_colors
    //% verzoegerung.defl=150
    //% weight=85
    export function scrolleText(text: string, farbe: number, verzoegerung: number): void {
        if (!strip) return;
        
        text = text.toUpperCase();
        const textLaenge = text.length;
        
        // Beginne das Scrollen vom rechten Rand der Matrix
        let startX = matrixBreite;
        
        for (let zeichenIndex = 0; zeichenIndex < textLaenge; zeichenIndex++) {
            const buchstabe = text.charAt(zeichenIndex);
            const muster = fontData[buchstabe] || fontData[' '];
            const musterBreite = muster[0].length;
            
            // Scrolle diesen Buchstaben von rechts nach links
            for (let x = startX; x < -musterBreite; x--) {
                zeigeBuchstabeAnPosition(buchstabe, farbe, x, 1);
                basic.pause(verzoegerung);
            }
            
            // Der nächste Buchstabe beginnt näher, um Abstand zu berücksichtigen
            startX = -musterBreite + 1;
        }
    }
    
    /**
     * Statischen Text auf der NeoPixel-Matrix anzeigen
     * @param text der anzuzeigende Text
     * @param farbe die Farbe des Textes
     * @param x x-Position
     * @param y y-Position
     */
    //% blockId=neopixel_matrix_display_text
    //% block="Zeige Text %text|mit Farbe %farbe||an x %x y %y"
    //% farbe.shadow=neopixel_colors
    //% expandableArgumentMode="toggle"
    //% inlineInputMode=inline
    //% weight=80
    export function zeigeText(
        text: string, 
        farbe: number, 
        x?: number, 
        y?: number
    ): void {
        if (!strip) return;
        
        text = text.toUpperCase();
        if (!x) x = 0;
        if (!y) y = 1;
        
        strip.clear();
        
        let aktuellesX = x;
        for (let i = 0; i < text.length; i++) {
            const buchstabe = text.charAt(i);
            const muster = fontData[buchstabe] || fontData[' '];
            const musterBreite = muster[0].length;
            
            // Zeichne diesen Buchstaben
            for (let py = 0; py < muster.length; py++) {
                for (let px = 0; px < musterBreite; px++) {
                    if (muster[py][px]) {
                        const pixelX = aktuellesX + px;
                        const pixelY = y + py;
                        
                        if (pixelX >= 0 && pixelX < matrixBreite && 
                            pixelY >= 0 && pixelY < matrixHoehe) {
                            const pixelIndex = getPixelIndex(pixelX, pixelY);
                            if (pixelIndex >= 0) {
                                strip.setPixelColor(pixelIndex, farbe);
                            }
                        }
                    }
                }
            }
            
            // Position für nächsten Buchstaben verschieben (Abstand hinzufügen)
            aktuellesX += musterBreite + 1;
            
            // Wenn wir über das Display hinausgegangen sind, aufhören
            if (aktuellesX >= matrixBreite) break;
        }
        
        strip.show();
    }
    
    /**
     * Hilfsfunktion zum Anzeigen eines Buchstabens an einer bestimmten Position
     */
    function zeigeBuchstabeAnPosition(buchstabe: string, farbe: number, x: number, y: number): void {
        buchstabe = buchstabe.charAt(0).toUpperCase();
        const muster = fontData[buchstabe] || fontData[' '];
        
        strip.clear();
        
        for (let py = 0; py < muster.length; py++) {
            for (let px = 0; px < muster[0].length; px++) {
                if (muster[py][px]) {
                    const pixelX = x + px;
                    const pixelY = y + py;
                    
                    if (pixelX >= 0 && pixelX < matrixBreite && 
                        pixelY >= 0 && pixelY < matrixHoehe) {
                        const pixelIndex = getPixelIndex(pixelX, pixelY);
                        if (pixelIndex >= 0) {
                            strip.setPixelColor(pixelIndex, farbe);
                        }
                    }
                }
            }
        }
        
        strip.show();
    }
    
    /**
     * Konvertiere x,y-Koordinaten in Pixel-Index für den Strip
     */
    function getPixelIndex(x: number, y: number): number {
        if (x < 0 || x >= matrixBreite || y < 0 || y >= matrixHoehe) return -1;
        
        // Wähle Layout-Algorithmus basierend auf Konfiguration
        if (matrixLayout === MatrixLayout.ZickZack) {
            // ZickZack-Layout: gerade Reihen gehen von links nach rechts, ungerade von rechts nach links
            const reihe = y;
            const spalte = (reihe % 2 === 0) ? x : (matrixBreite - 1 - x);
            return reihe * matrixBreite + spalte;
        } else {
            // Sequentielles Layout: alle Reihen gehen von links nach rechts
            return y * matrixBreite + x;
        }
    }
}
