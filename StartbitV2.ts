// Auto init hiwonder board when extension is added
informatiktheater.startbit_Init();

/**
 * Well known colors for a NeoPixel strip
 */
enum NeoPixelColors {
    //% block=red
    //% block.loc.de="rüt"
    Red = 0xff0000,
    //% block=orange
    //% block.loc.de="orange"
    Orange = 0xffa500,
    //% block=yellow
    //% block.loc.de="gelb"
    Yellow = 0xffff00,
    //% block=green
    //% block.loc.de="grün"
    Green = 0x00ff00,
    //% block=blue
    //% block.loc.de="blau"
    Blue = 0x0000ff,
    //% block=indigo
    //% block.loc.de="indigo"
    Indigo = 0x4b0082,
    //% block=violet
    //% block.loc.de="violett"
    Violet = 0x8a2be2,
    //% block=purple
    //% block.loc.de="pink"
    Purple = 0xff00ff,
    //% block=white
    //% block.loc.de="weiss"
    White = 0xffffff,
    //% block=black
    //% block.loc.de="schwarz (aus)"
    Black = 0x000000,
}

/**
 * DC motors on Hiwonder board
 */
enum HiwonderMotors {
    //% block="Motor 1"
    M1,
    //% block="Motor 2"
    M2,
    //% block="Motor 1 + 2"
    M12,
}

/**
 * DC motors directions
 */
enum MotorDirections {
    //% block="Forward"
    //% block.loc.de="Vorwärts"
    Forward,
    //% block="Backward"
    //% block.loc.de="Rückwärts"
    Backward,
}

/**
 * Named indexes for pre-defined icons
 */
enum IconIndex {
    //% block="Smiley lachen"
    smiley_high,
    //% block="Smiley schmunzeln"
    smiley_b_high,
    //% block="Smiley Strich"
    smiley_underscore,
    //% block="Smiley betrübt"
    smiley_b_down,
    //% block="Smiley traurig"
    smiley_down,
    //% block="Herz gross"
    heart_big,
    //% block="Herz mittel"
    heart_medium,
    //% block="Herz klein"
    heart_small,
    //% block="Totenkopf 1"
    skull_1,
    //% block="Totenkopf 2"
    skull_2,
    //% block="Pfeil rechts"
    arrow_right,
    //% block="Pfeil links"
    arrow_left,
    //% block="Sonne"
    sun,
    //% block="X"
    X,
    //% block="Tanz rechts"
    dance_r,
    //% block="Tanz mitte"
    dance_c,
    //% block="Tanz links"
    dance_l,
    //% block="Musiknote"
    note,
    //% block="Verboten"
    forbidden,
}

/**
 * Pre-defined 16x16 icons as row bitmasks (one number per row, MSB = leftmost pixel).
 */
const Icons: number[][] = [
    [0, 0, 0, 7224, 7224, 7224, 0, 384, 8580, 12300, 6168, 4080, 2016, 0, 0, 0],
    [0, 0, 0, 7224, 7224, 7224, 0, 384, 384, 0, 6168, 4080, 2016, 0, 0, 0],
    [0, 0, 0, 7224, 7224, 7224, 0, 384, 384, 0, 0, 4080, 4080, 0, 0, 0],
    [0, 0, 0, 7224, 7224, 7224, 0, 384, 384, 0, 0, 2016, 4080, 4104, 0, 0],
    [0, 0, 0, 7224, 7224, 7224, 0, 384, 384, 0, 0, 2016, 4080, 6168, 12300, 0],
    [0, 14364, 31806, 65151, 65535, 65535, 65535, 32766, 16380, 8184, 4080, 2016, 960, 384, 0, 0],
    [0, 0, 0, 6168, 15420, 15996, 16380, 8184, 4080, 2016, 960, 384, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1056, 3696, 2016, 960, 384, 0, 0, 0, 0, 0, 0],
    [0, 2032, 2056, 4100, 8194, 8194, 8194, 9058, 4964, 2184, 5140, 3048, 1040, 992, 0, 0],
    [0, 256, 1984, 8176, 16376, 8176, 13208, 5008, 4064, 1728, 2976, 1088, 896, 256, 0, 0],
    [0, 0, 0, 16, 24, 28, 32766, 32767, 32766, 32764, 24, 16, 0, 0, 0, 0],
    [0, 0, 0, 2048, 6144, 14336, 32767, 65535, 32767, 16383, 6144, 2048, 0, 0, 0, 0],
    [128, 128, 4228, 2056, 1488, 992, 2032, 30711, 2032, 992, 2512, 4104, 8324, 128, 128, 0],
    [32769, 16386, 8196, 4104, 2064, 1056, 576, 384, 384, 576, 1056, 2064, 4104, 8196, 16386, 32769],
    [1984, 448, 456, 264, 8184, 4480, 4480, 384, 768, 768, 768, 992, 544, 544, 7712, 4144],
    [1984, 896, 256, 256, 8184, 5000, 5000, 896, 256, 896, 896, 4064, 2080, 2080, 2080, 6192],
    [896, 768, 4864, 4352, 8160, 800, 800, 768, 384, 384, 1920, 1152, 1152, 1152, 1216, 3136],
    [0, 0, 0, 512, 768, 640, 576, 576, 576, 512, 512, 7680, 15872, 15872, 7168, 0],
    [4080, 12300, 24582, 20482, 34817, 33793, 33281, 33025, 32897, 32833, 32801, 32785, 16394, 24582, 12300, 4080],
];

/**
 * Different modes for RGB or RGB+W NeoPixel strips
 */
enum NeoPixelMode {
    //% block="RGB (GRB format)"
    //% block.loc.de="GRB"
    RGB_GRB = 1,
    //% block="RGB+W"
    //% block.loc.de="RGB+W"
    RGBW = 2,
    //% block="RGB (RGB format)"
    //% block.loc.de="RGB"
    RGB_RGB = 3,
}

/**
 * NeoPixel matrix size definitions
 */
enum matrixSizes {
    //% block="16x16"
    medium_16x16,
    //% block="32x8"
    medium_32x8,
    //% block="64x8"
    large_64x8,
    //% block="8x8"
    small_8x8,
    //% block="Netz 20x20"
    netz_20x20,
}

/**
 * Available pins on ports (connectors) for strips
 */
enum HiwonderPins {
    P2 = DigitalPin.P2,
    P1 = DigitalPin.P1,
    P14 = DigitalPin.P14,
    P13 = DigitalPin.P13,
    P16 = DigitalPin.P16,
    Board = DigitalPin.P15,
}

/**
 * Available pins on ports (connectors) for matrix (no onboard pin)
 */
enum HiwonderMatrixPins {
    P2 = DigitalPin.P2,
    P1 = DigitalPin.P1,
    P14 = DigitalPin.P14,
    P13 = DigitalPin.P13,
    P16 = DigitalPin.P16,
}

enum PowerSource {
    //% block="intern"
    Intern,
    //% block="extern"
    Extern,
}

const font8x3 = hex`
    0000000000000000 1038381010001000 6C6C480000000000 00287C28287C2800
    2038403008701000 64640810204C4C00 2050502054483400 3030200000000000
    1020202020201000 2010101010102000 0028387C38280000 0010107C10100000
    0000000000303020 0000007C00000000 0000000000303000 0004081020400000
    38444C5464443800 1030101010103800 3844041820407C00 3844043804443800
    081828487C080800 7C40407804443800 1820407844443800 7C04081020202000
    3844443844443800 3844443C04083000 0000303000303000 0000303000303020
    0810204020100800 00007C00007C0000 2010080408102000 3844041810001000
    38445C545C403800 384444447C444400 7844447844447800 3844404040443800
    7844444444447800 7C40407840407C00 7C40407840404000 3844405C44443C00
    4444447C44444400 3810101010103800 0404040444443800 4448506050484400
    4040404040407C00 446C544444444400 4464544C44444400 3844444444443800
    7844447840404000 3844444454483400 7844447848444400 3844403804443800
    7C10101010101000 4444444444443800 4444444444281000 4444545454542800
    4444281028444400 4444442810101000 7808102040407800 3820202020203800
    0040201008040000 3808080808083800 1028440000000000 00000000000000FC
    3030100000000000 000038043C443C00 4040784444447800 0000384440443800
    04043C4444443C00 0000384478403800 1820207820202000 00003C44443C0438
    4040704848484800 1000101010101800 0800180808084830 4040485060504800
    1010101010101800 0000685454444400 0000704848484800 0000384444443800
    0000784444447840 00003C4444443C04 0000582420207000 0000384038043800
    0020782020281000 0000484848582800 0000444444281000 00004444547C2800
    0000484830484800 0000484848381060 0000780830407800 1820206020201800
    1010100010101000 3008080C08083000 2850000000000000
    384444447C444400 384444447C444400 384444447C444400 3C04043C44443C00
    3C04043C44443C00 3C04043C44443C00
`;

// ─────────────────────────────────────────────────────────────────────────────
// Dimensions for the five matrix sizes: [width, height]
// ─────────────────────────────────────────────────────────────────────────────
const MATRIX_DIMS: number[][] = [
    [16, 16],  // medium_16x16
    [32, 8],   // medium_32x8
    [64, 8],   // large_64x8
    [8, 8],    // small_8x8
    [20, 20],  // netz_20x20
];

/*
 Informatiktheater package
*/
//% weight=110 color=#3a4cf7
namespace informatiktheater {

    let leds_total = 0;
    let motor_1_speed = 0;
    let motor_2_speed = 0;

    // ─────────────────────────────────────────────────────────────────────────
    // Color picker helper (MakeCode block, not called from TS directly)
    // ─────────────────────────────────────────────────────────────────────────

    //% blockId=brightColorNumberPicker block="%value"
    //% shim=TD_ID colorSecondary="#FFFFFF"
    //% value.fieldEditor="colornumber" value.fieldOptions.decompileLiterals=true
    //% value.defl='#ff0000'
    //% value.fieldOptions.colours='["#000000","#ff0000","#ffa500","#ffff00","#00ff00","#0000ff","#00ffff","#ff00ff","#8a2be2","#ffffff"]'
    //% value.fieldOptions.columns=5 value.fieldOptions.className='rgbColorPicker'
    //% weight=5
    //% subcategory="Farben"
    //% group="Farben"
    export function __colorNumberPicker(value: number) {
        return value;
    }

    // ─────────────────────────────────────────────────────────────────────────
    // ColorPattern – wraps a fixed-length list of RGB values for one matrix row
    // ─────────────────────────────────────────────────────────────────────────

    export class ColorPattern {
        private _colorList: number[];

        constructor(val: number[]) {
            this._colorList = val.slice(0);
        }

        getColors(): number[] {
            return this._colorList;
        }
    }

    // ─────────────────────────────────────────────────────────────────────────
    // Strip factory
    // ─────────────────────────────────────────────────────────────────────────

    /**
     * Create a new NeoPixel driver.
     * @param pin the pin where the neopixel is connected
     * @param numleds number of leds in the strip, eg: 24,30,60,64
     * @param power_source intern or extern battery
     */
    //% blockId="neopixel_create"
    //% block="NeoPixel at pin %pin| with %numleds leds| power source %power_source"
    //% block.loc.de="NeoPixels an Pin %pin|mit %numleds Pixeln| Spannungsquelle %power_source"
    //% parts="neopixel"
    //% power_source.defl=PowerSource.Intern
    //% subcategory="Stripe"
    //% weight=110
    //% blockSetVariable=strip
    //% group="Setup"
    export function create(
        pin: HiwonderPins,
        numleds: number,
        power_source: PowerSource
    ): Strip {
        let strip = new Strip();
        const mode: NeoPixelMode = NeoPixelMode.RGB_GRB;
        const stride = 3; // RGB_GRB is always 3 bytes per pixel
        strip.buf = pins.createBuffer(numleds * stride);
        strip.start = 0;
        strip._length = numleds;
        strip._mode = mode;
        strip.setBrightness(128);
        strip._power = power_source;
        if (power_source == PowerSource.Intern) {
            leds_total += numleds;
        }
        // HiwonderPins values are identical to DigitalPin values, so a direct
        // cast is safe here – no verbose switch/case needed.
        strip.setPin(pin as number as DigitalPin);
        return strip;
    }

    // ─────────────────────────────────────────────────────────────────────────
    // Strip class
    // ─────────────────────────────────────────────────────────────────────────

    export class Strip {
        buf: Buffer;
        pin: DigitalPin;
        brightness: number;
        start: number;
        _length: number;
        _mode: NeoPixelMode;
        _power: PowerSource;

        //% blockId="neopixel_set_strip_color" block="%strip|show color %rgb=neopixel_colors"
        //% block.loc.de="%strip|zeige Farbe %rgb=neopixel_colors"
        //% strip.defl=strip
        //% weight=50
        //% parts="neopixel"
        //% subcategory=Stripe
        //% group="Kontrolle"
        showColor(rgb: number) {
            this.setAllRGB(rgb >> 0);
            this.show();
        }

        //% blockId="neopixel_set_strip_rainbow" block="%strip|show rainbow from %startHue|to %endHue"
        //% block.loc.de="%strip|zeige Regenbogen von Farbton %startHue|bis %endHue"
        //% strip.defl=strip
        //% startHue.shadow="colorWheelHsvPicker"
        //% startHue.defl=1
        //% endHue.defl=255
        //% endHue.shadow="colorWheelHsvPicker"
        //% weight=20
        //% parts="neopixel"
        //% subcategory="Stripe"
        //% group="Kontrolle"
        showRainbow(startHue: number = 1, endHue: number = 255) {
            if (this._length <= 0) return;

            startHue = Math.round((startHue * 360) / 255);
            endHue   = Math.round((endHue   * 360) / 255);

            const saturation = 100;
            const luminance  = 50;
            const steps      = this._length;

            const h1 = startHue;
            const h2 = endHue;

            let hDistCW: number;
            let hDistCCW: number;
            if (h2 != h1 && (h2 + 360 - h1) % 360 == 0) {
                hDistCW = hDistCCW = 360;
            } else {
                hDistCW  = (h2 + 360 - h1) % 360;
                hDistCCW = (h1 + 360 - h2) % 360;
            }

            // Always use clockwise interpolation (matches original behaviour)
            const hStep = Math.idiv(hDistCW * 100, steps);
            const h1_100 = h1 * 100;

            const s1 = saturation;
            const sStep = 0; // start == end saturation
            const s1_100 = s1 * 100;

            const l1 = luminance;
            const lStep = 0; // start == end luminance
            const l1_100 = l1 * 100;

            if (steps == 1) {
                this.setPixelColor(0, hsl(h1 + hStep, s1 + sStep, l1 + lStep));
            } else {
                this.setPixelColor(0, hsl(startHue, saturation, luminance));
                for (let i = 1; i < steps - 1; i++) {
                    const h = Math.idiv(h1_100 + i * hStep, 100) + 360;
                    const s = Math.idiv(s1_100 + i * sStep, 100);
                    const l = Math.idiv(l1_100 + i * lStep, 100);
                    this.setPixelColor(i, hsl(h, s, l));
                }
                this.setPixelColor(steps - 1, hsl(endHue, saturation, luminance));
            }
            this.show();
        }

        //% blockId="neopixel_set_pixel_color"
        //% block="%strip|set color of Neopixel %pixeloffset|to %rgb=neopixel_colors|amount %number"
        //% block.loc.de="%strip|setze Farbe von Neopixel %pixeloffset|auf %rgb=neopixel_colors|Anzahl %number"
        //% strip.defl=strip
        //% number.defl=1 number.min=1 number.max=255
        //% pixeloffset.defl=0 pixeloffset.min=0 pixeloffset.max=255
        //% rgb.shadow=neopixel_colors
        //% parts="neopixel"
        //% subcategory="Stripe"
        //% group="Kontrolle"
        setPixelColorRange(pixeloffset: number, rgb: number, number: number): void {
            for (let i = 0; i < number; i++) {
                this.setPixelRGB((pixeloffset + i) >> 0, rgb >> 0);
            }
        }

        setPixelColor(pixeloffset: number, rgb: number): void {
            this.setPixelRGB(pixeloffset >> 0, rgb >> 0);
        }

        //% blockId="neopixel_show" block="%strip|show"
        //% block.loc.de="%strip|anzeigen"
        //% strip.defl=strip
        //% weight=51
        //% parts="neopixel"
        //% subcategory=Stripe
        //% group="Kontrolle"
        show() {
            ws2812b.sendBuffer(this.buf, this.pin);
        }

        //% blockId="neopixel_clear" block="%strip|clear"
        //% block.loc.de="%strip|ausschalten"
        //% strip.defl=strip
        //% weight=9
        //% parts="neopixel"
        //% subcategory=Stripe
        //% group="Kontrolle"
        clear(): void {
            const stride = this._mode == NeoPixelMode.RGBW ? 4 : 3;
            this.buf.fill(0, this.start * stride, this._length * stride);
        }

        //% blockId="neopixel_length" block="%strip|length"
        //% block.loc.de="%strip|Länge"
        //% strip.defl=strip
        //% weight=60
        //% subcategory=Stripe
        //% group="Features"
        length(): number {
            return this._length;
        }

        //% blockId="neopixel_set_brightness" block="%strip|set brightness %brightness"
        //% block.loc.de="%strip|setze Helligkeit auf (0-255) %brightness"
        //% brightness.defl=150 brightness.min=0 brightness.max=255
        //% strip.defl=strip
        //% weight=41
        //% parts="neopixel"
        //% subcategory=Stripe
        //% group="Setup"
        setBrightness(brightness: number): void {
            this.brightness = brightness & 0xff;
        }

        //% blockId="neopixel_shift" block="%strip|shift pixels by %offset"
        //% block.loc.de="%strip|verschiebe NeoPixel um %offset"
        //% strip.defl=strip
        //% weight=40
        //% parts="neopixel"
        //% subcategory="Stripe"
        //% group="Kontrolle"
        shift(offset: number = 1): void {
            const stride = this._mode == NeoPixelMode.RGBW ? 4 : 3;
            this.buf.shift(-(offset >> 0) * stride, this.start * stride, this._length * stride);
        }

        //% blockId="neopixel_rotate" block="%strip|rotate pixels by %offset"
        //% block.loc.de="%strip|rotiere NeoPixel um %offset"
        //% strip.defl=strip
        //% weight=39
        //% parts="neopixel"
        //% subcategory="Stripe"
        //% group="Kontrolle"
        rotate(offset: number = 1): void {
            const stride = this._mode == NeoPixelMode.RGBW ? 4 : 3;
            this.buf.rotate(-(offset >> 0) * stride, this.start * stride, this._length * stride);
        }

        setPin(pin: DigitalPin): void {
            this.pin = pin;
            pins.digitalWritePin(this.pin, 0);
        }

        power(): number {
            const stride = this._mode == NeoPixelMode.RGBW ? 4 : 3;
            const end = this.start + this._length;
            let p = 0;
            for (let i = this.start; i < end; ++i) {
                for (let j = 0; j < stride; ++j) {
                    p += this.buf[i + j];
                }
            }
            return Math.idiv(this.length() * 7, 10) + Math.idiv(p * 480, 10000);
        }

        private effectiveBrightness(): number {
            if (this._power == PowerSource.Extern) return this.brightness;
            return Math.min(this.brightness, total_brightness_limit());
        }

        private applyBrightness(channel: number): number {
            const br = this.effectiveBrightness();
            return br < 255 ? (channel * br) >> 8 : channel;
        }

        private setBufferRGB(offset: number, red: number, green: number, blue: number): void {
            if (this._mode == NeoPixelMode.RGB_RGB) {
                this.buf[offset + 0] = red;
                this.buf[offset + 1] = green;
            } else {
                this.buf[offset + 0] = green;
                this.buf[offset + 1] = red;
            }
            this.buf[offset + 2] = blue;
        }

        private setAllRGB(rgb: number) {
            const red   = this.applyBrightness(unpackR(rgb));
            const green = this.applyBrightness(unpackG(rgb));
            const blue  = this.applyBrightness(unpackB(rgb));
            const end   = this.start + this._length;
            const stride = this._mode == NeoPixelMode.RGBW ? 4 : 3;
            for (let i = this.start; i < end; ++i) {
                this.setBufferRGB(i * stride, red, green, blue);
            }
        }

        setPixelRGB(pixeloffset: number, rgb: number): void {
            if (pixeloffset < 0 || pixeloffset >= this._length) return;
            const stride = this._mode == NeoPixelMode.RGBW ? 4 : 3;
            const offset = (pixeloffset + this.start) * stride;
            this.setBufferRGB(
                offset,
                this.applyBrightness(unpackR(rgb)),
                this.applyBrightness(unpackG(rgb)),
                this.applyBrightness(unpackB(rgb))
            );
        }
    }

    // ─────────────────────────────────────────────────────────────────────────
    // Brightness limiter (internal battery protection)
    // ─────────────────────────────────────────────────────────────────────────

    function total_brightness_limit(): number {
        // WS2812B draws ~60 mA per LED at full white.
        // TP5400 on the Hiwonder board delivers ~800 mA usable.
        return Math.idiv(800 * 255, leds_total * 60) & 0xff;
    }

    // ─────────────────────────────────────────────────────────────────────────
    // Color helpers (public API – blocks and TS)
    // ─────────────────────────────────────────────────────────────────────────

    //% blockId="neopixel_rgb" block="red %red|green %green|blue %blue"
    //% block.loc.de="rot %red|grün %green|blau %blue"
    //% red.defl=255 red.min=0 red.max=255
    //% blue.defl=255 blue.min=0 blue.max=255
    //% green.defl=255 green.min=0 green.max=255
    //% subcategory="Farben"
    //% weight=6
    export function rgb(red: number, green: number, blue: number): number {
        return packRGB(red, green, blue);
    }

    //% blockId="neopixel_hsv" block="hue %hue"
    //% block.loc.de="Farbe (0-255) %hue"
    //% hue.shadow="colorWheelHsvPicker"
    //% subcategory="Farben"
    //% weight=9
    export function hsv_picker(hue: number): number {
        return hsl((hue * 360) / 255, 100, 50);
    }

    //% blockId="neopixel_colors" block="%color"
    //% block.loc.de="%color"
    //% subcategory="Farben"
    //% weight=10
    export function colors(color: NeoPixelColors): number {
        return color;
    }

    function packRGB(r: number, g: number, b: number): number {
        return ((r & 0xff) << 16) | ((g & 0xff) << 8) | (b & 0xff);
    }
    function unpackR(rgb: number): number { return (rgb >> 16) & 0xff; }
    function unpackG(rgb: number): number { return (rgb >> 8)  & 0xff; }
    function unpackB(rgb: number): number { return  rgb        & 0xff; }

    export function hsl(h: number, s: number, l: number): number {
        h = Math.round(h) % 360;
        s = Math.clamp(0, 99, Math.round(s));
        l = Math.clamp(0, 99, Math.round(l));

        const c  = Math.idiv(((100 - Math.abs(2 * l - 100)) * s) << 8, 10000);
        const h1 = Math.idiv(h, 60);
        const h2 = Math.idiv((h - h1 * 60) * 256, 60);
        const x  = (c * (256 - Math.abs((h1 % 2 << 8) + h2 - 256))) >> 8;

        let r$: number, g$: number, b$: number;
        switch (h1) {
            case 0: r$ = c; g$ = x; b$ = 0; break;
            case 1: r$ = x; g$ = c; b$ = 0; break;
            case 2: r$ = 0; g$ = c; b$ = x; break;
            case 3: r$ = 0; g$ = x; b$ = c; break;
            case 4: r$ = x; g$ = 0; b$ = c; break;
            default: r$ = c; g$ = 0; b$ = x; break;
        }

        const m = Math.idiv(Math.idiv((l * 2) << 8, 100) - c, 2);
        return packRGB(r$ + m, g$ + m, b$ + m);
    }

    export enum HueInterpolationDirection {
        Clockwise,
        CounterClockwise,
        Shortest,
    }

    // ─────────────────────────────────────────────────────────────────────────
    // Matrix factory
    // ─────────────────────────────────────────────────────────────────────────

    //% blockId="Matrix_Create"
    //% block="matrix auf Pin %pin|mit einer Grösse von %size| Spannungsquelle %power_source"
    //% power_source.defl=PowerSource.Intern
    //% subcategory="Matrix"
    //% group="Setup"
    //% parts="neopixel"
    //% blockSetVariable=matrix
    export function create_matrix(
        pin: HiwonderMatrixPins,
        size: matrixSizes,
        power_source: PowerSource
    ): Matrix {
        const dims = MATRIX_DIMS[size];
        const w = dims[0];
        const h = dims[1];

        let matrix   = new Matrix();
        // HiwonderMatrixPins values equal DigitalPin values – direct cast is safe.
        matrix.strip = informatiktheater.create(pin as number as HiwonderPins, h * w, power_source);
        matrix.Width  = w;
        matrix.Height = h;
        return matrix;
    }

    // ─────────────────────────────────────────────────────────────────────────
    // Matrix class
    // ─────────────────────────────────────────────────────────────────────────

    export class Matrix {
        strip: informatiktheater.Strip;
        Width: number;
        Height: number;

        //%blockId="Matrix_show" block="%matrix| anzeigen"
        //% subcategory=Matrix
        //% group="Features"
        show(): void {
            this.strip.show();
        }

        //%blockId="Matrix_Brighness" block="%matrix setze Helligkeit auf (0-255) %setpoint"
        //%setpoint.defl=32 setpoint.min=0 setpoint.max=255
        //% subcategory="Matrix"
        //% weight=41
        //% group="Setup"
        setBrightness(setpoint: number): void {
            this.strip.setBrightness(setpoint);
        }

        //%blockId="Matrix_clear" block="%matrix| ausschalten"
        //% weight=25
        //% subcategory=Matrix
        //% group="Features"
        clear(): void {
            this.strip.clear();
            this.strip.show();
        }

        /**
         * Set a single pixel by (x, y) coordinates.
         * Coordinate system: origin top-left, x right, y down.
         * The LED string follows a zigzag (serpentine) column layout for
         * non-square / non-net matrices: even columns top→bottom, odd columns bottom→top.
         */
        //%blockId="Matrix_setPixel" block="%matrix| setze Pixel x %x| y %y| auf Farbe %colour"
        //%weight=40
        //%colour.shadow=neopixel_colors
        //% subcategory="Matrix"
        //% group="Features"
        setPixel(x: number, y: number, colour: number): void {
            if (x < 0 || x >= this.Width || y < 0 || y >= this.Height) return;

            // 8x8 and 20x20 matrices use a simple row-major layout.
            if ((this.Width == 8 && this.Height == 8) ||
                (this.Width == 20 && this.Height == 20)) {
                this.strip.setPixelColor(y * this.Width + x, colour);
            } else {
                // Serpentine column layout
                if (x % 2 == 0) {
                    this.strip.setPixelColor(y + x * this.Height, colour);
                } else {
                    this.strip.setPixelColor(this.Height - 1 - y + x * this.Height, colour);
                }
            }
        }

        /**
         * Show static text on the matrix (6×8 pixel font, vertically centred).
         * Call show() afterwards is NOT required – this method calls it internally.
         */
        //% blockId="Matrix_text" block="%matrix Text 32x8: %text|Position: %x_offset|Farbe: %colour"
        //% subcategory="Matrix"
        //% group="Features"
        //% colour.shadow=neopixel_colors
        //% x_offset.defl=0 x_offset.min=0 x_offset.max=32
        showText(text: string, x_offset: number, colour: number): void {
            for (let i = 0; i < text.length; i++) {
                this.drawBitmap(getLettermap(text.charAt(i)), x_offset + 6 * i, 6, 8, colour, 0x80);
            }
            this.strip.show();
        }

        /**
         * Scroll text across the matrix (6×8 pixel font).
         * Clears the screen before scrolling; show() is called internally.
         */
        //% blockId="Matrix_scrollText"
        //% block="%matrix Text 32x8: %text|Geschwindigkeit (0-200): %speed|Farbe: %colour"
        //% subcategory="Matrix"
        //% group="Features"
        //% colour.shadow=neopixel_colors
        //% speed.min=1 speed.max=200 speed.defl=50
        scrollText(text: string, speed: number, colour: number): void {
            this.strip.clear();
            const charWidth = 6;
            for (let Xpos = this.Width; Xpos > -charWidth * text.length; Xpos--) {
                for (let i = 0; i < text.length; i++) {
                    const x = Xpos + charWidth * i;
                    if (x < this.Width && x > -charWidth) {
                        this.drawBitmap(getLettermap(text.charAt(i)), x, charWidth, 8, colour, 0x80);
                    }
                }
                this.strip.show();
                basic.pause(1000 / speed);
                this.strip.clear();
            }
        }

        /**
         * Draw a pre-defined 16×16 icon. Does nothing if the matrix is not 16×16.
         */
        //% blockId="Matrix_icons" block="%matrix Icon 16x16: %icon|Farbe: %colour"
        //% subcategory=Matrix
        //% group="Features"
        //% colour.shadow=neopixel_colors
        draw_icon(icon: IconIndex, colour: number): void {
            if (this.Height != 16 || this.Width != 16) return;
            this.drawBitmap(Icons[icon], 0, 16, 16, colour, 0x8000);
            this.strip.show();
        }

        /**
         * Set all pixels from a ColorPattern array (one entry per row).
         * Works for any matrix size; rows and cols must match the supplied patterns.
         *
         * @param colours  one ColorPattern per row
         * @param rows     number of rows
         * @param cols     number of columns (must match ColorPattern length)
         */
        setMatrix(colours: ColorPattern[], rows: number, cols: number): void {
            for (let y = 0; y < rows; y++) {
                const rowColors = colours[y].getColors();
                for (let x = 0; x < cols; x++) {
                    this.setPixel(x, y, rowColors[x]);
                }
            }
            this.show();
        }

        // ── MakeCode block wrappers (kept for block-editor compatibility) ──────

        //% blockId="neopixel_set_matrix_16"
        //% block="Matrix %matrix %c_0|%c_1|%c_2|%c_3|%c_4|%c_5|%c_6|%c_7|%c_8|%c_9|%c_10|%c_11|%c_12|%c_13|%c_14|%c_15"
        //% weight=100
        //% subcategory="Matrix"
        //% group="Features" weight=10
        //% c_0.shadow=color_for_led_16  c_1.shadow=color_for_led_16  c_2.shadow=color_for_led_16
        //% c_3.shadow=color_for_led_16  c_4.shadow=color_for_led_16  c_5.shadow=color_for_led_16
        //% c_6.shadow=color_for_led_16  c_7.shadow=color_for_led_16  c_8.shadow=color_for_led_16
        //% c_9.shadow=color_for_led_16  c_10.shadow=color_for_led_16 c_11.shadow=color_for_led_16
        //% c_12.shadow=color_for_led_16 c_13.shadow=color_for_led_16 c_14.shadow=color_for_led_16
        //% c_15.shadow=color_for_led_16
        setMatrix_16(
            c_0: ColorPattern, c_1: ColorPattern, c_2: ColorPattern, c_3: ColorPattern,
            c_4: ColorPattern, c_5: ColorPattern, c_6: ColorPattern, c_7: ColorPattern,
            c_8: ColorPattern, c_9: ColorPattern, c_10: ColorPattern, c_11: ColorPattern,
            c_12: ColorPattern, c_13: ColorPattern, c_14: ColorPattern, c_15: ColorPattern
        ): void {
            this.setMatrix(
                [c_0, c_1, c_2, c_3, c_4, c_5, c_6, c_7,
                 c_8, c_9, c_10, c_11, c_12, c_13, c_14, c_15],
                16, 16
            );
        }

        //% blockId="neopixel_set_matrix_32x8"
        //% block="Matrix %matrix %c_0|%c_1|%c_2|%c_3|%c_4|%c_5|%c_6|%c_7"
        //% weight=99
        //% subcategory="Matrix"
        //% group="Features" weight=9
        //% c_0.shadow=color_for_led_32 c_1.shadow=color_for_led_32 c_2.shadow=color_for_led_32
        //% c_3.shadow=color_for_led_32 c_4.shadow=color_for_led_32 c_5.shadow=color_for_led_32
        //% c_6.shadow=color_for_led_32 c_7.shadow=color_for_led_32
        setMatrix_32x8(
            c_0: ColorPattern, c_1: ColorPattern, c_2: ColorPattern, c_3: ColorPattern,
            c_4: ColorPattern, c_5: ColorPattern, c_6: ColorPattern, c_7: ColorPattern
        ): void {
            this.setMatrix([c_0, c_1, c_2, c_3, c_4, c_5, c_6, c_7], 8, 32);
        }

        // ── Internal bitmap renderer ──────────────────────────────────────────

        /**
         * Draw a bitmap onto the matrix, vertically centred.
         *
         * @param bitmap        one number per row, bit = pixel (MSB = leftmost)
         * @param x             leftmost column on the physical matrix
         * @param width         number of columns in the bitmap
         * @param bitmapHeight  number of rows in the bitmap
         * @param colour        LED colour
         * @param firstBitMask  mask for column 0 of the bitmap (0x8000 for 16-wide, 0x80 for 8-wide)
         */
        private drawBitmap(
            bitmap: number[],
            x: number,
            width: number,
            bitmapHeight: number,
            colour: number,
            firstBitMask: number
        ): void {
            const yOffset = (this.Height - bitmapHeight) / 2;

            for (let col = 0; col < width; col++) {
                const mask      = firstBitMask >> col;
                const physCol   = x + col;
                const evenCol   = (physCol % 2) == 0;

                for (let row = 0; row < bitmapHeight; row++) {
                    // In even columns the physical string runs top→bottom,
                    // so bitmap row 0 maps to the lowest Ypos in the loop.
                    // In odd columns the string runs bottom→top (zigzag).
                    const bitmapRow = evenCol ? row : (bitmapHeight - 1 - row);
                    if (bitmap[bitmapRow] & mask) {
                        const Ypos = evenCol ? (bitmapHeight - 1 - row) : row;
                        this.strip.setPixelColor(
                            physCol * this.Height + Ypos + yOffset,
                            colour
                        );
                    }
                }
            }
        }
    } // end class Matrix

    // ─────────────────────────────────────────────────────────────────────────
    // Font helper
    // ─────────────────────────────────────────────────────────────────────────

    function getLettermap(char: string): number[] {
        const letterMap: number[] = [0, 0, 0, 0, 0, 0, 0, 0];
        const offset = char.charCodeAt(0) - 32; // ASCII offset into font table
        if (offset >= 0) {
            for (let i = 0; i < 8; i++) {
                letterMap[i] = font8x3.getNumber(NumberFormat.UInt8BE, offset * 8 + i);
            }
        }
        return letterMap;
    }

    // ─────────────────────────────────────────────────────────────────────────
    // ColorPattern factories (one per matrix width – required by MakeCode blocks)
    // ─────────────────────────────────────────────────────────────────────────

    //% blockId="color_for_led_16"
    //% block="$c_1|$c_2|$c_3|$c_4|$c_5|$c_6|$c_7|$c_8$c_9$c_10$c_11$c_12$c_13$c_14$c_15$c_16"
    //% subcategory="Farben"
    //% group="Farben" weight=10
    //% c_1.shadow="brightColorNumberPicker"   c_2.shadow="brightColorNumberPicker"
    //% c_3.shadow="brightColorNumberPicker"   c_4.shadow="brightColorNumberPicker"
    //% c_5.shadow="brightColorNumberPicker"   c_6.shadow="brightColorNumberPicker"
    //% c_7.shadow="brightColorNumberPicker"   c_8.shadow="brightColorNumberPicker"
    //% c_9.shadow="brightColorNumberPicker"   c_10.shadow="brightColorNumberPicker"
    //% c_11.shadow="brightColorNumberPicker"  c_12.shadow="brightColorNumberPicker"
    //% c_13.shadow="brightColorNumberPicker"  c_14.shadow="brightColorNumberPicker"
    //% c_15.shadow="brightColorNumberPicker"  c_16.shadow="brightColorNumberPicker"
    //% c_1.defl='#000000'   c_2.defl='#000000'   c_3.defl='#000000'   c_4.defl='#000000'
    //% c_5.defl='#000000'   c_6.defl='#000000'   c_7.defl='#000000'   c_8.defl='#000000'
    //% c_9.defl='#000000'   c_10.defl='#000000'  c_11.defl='#000000'  c_12.defl='#000000'
    //% c_13.defl='#000000'  c_14.defl='#000000'  c_15.defl='#000000'  c_16.defl='#000000'
    //% inlineInputMode=inline
    export function colorForLed_16(
        c_1: number, c_2: number, c_3: number, c_4: number,
        c_5: number, c_6: number, c_7: number, c_8: number,
        c_9: number, c_10: number, c_11: number, c_12: number,
        c_13: number, c_14: number, c_15: number, c_16: number
    ): ColorPattern {
        return new ColorPattern([c_1, c_2, c_3, c_4, c_5, c_6, c_7, c_8,
                                 c_9, c_10, c_11, c_12, c_13, c_14, c_15, c_16]);
    }

    //% blockId="color_for_led_32"
    //% block="$c_1|$c_2|$c_3|$c_4|$c_5|$c_6|$c_7|$c_8|$c_9|$c_10|$c_11|$c_12|$c_13|$c_14|$c_15|$c_16|$c_17|$c_18|$c_19|$c_20|$c_21|$c_22|$c_23|$c_24|$c_25|$c_26|$c_27|$c_28|$c_29|$c_30|$c_31|$c_32|"
    //% subcategory="Farben"
    //% group="Farben" weight=11
    //% c_1.shadow="brightColorNumberPicker"   c_2.shadow="brightColorNumberPicker"
    //% c_3.shadow="brightColorNumberPicker"   c_4.shadow="brightColorNumberPicker"
    //% c_5.shadow="brightColorNumberPicker"   c_6.shadow="brightColorNumberPicker"
    //% c_7.shadow="brightColorNumberPicker"   c_8.shadow="brightColorNumberPicker"
    //% c_9.shadow="brightColorNumberPicker"   c_10.shadow="brightColorNumberPicker"
    //% c_11.shadow="brightColorNumberPicker"  c_12.shadow="brightColorNumberPicker"
    //% c_13.shadow="brightColorNumberPicker"  c_14.shadow="brightColorNumberPicker"
    //% c_15.shadow="brightColorNumberPicker"  c_16.shadow="brightColorNumberPicker"
    //% c_17.shadow="brightColorNumberPicker"  c_18.shadow="brightColorNumberPicker"
    //% c_19.shadow="brightColorNumberPicker"  c_20.shadow="brightColorNumberPicker"
    //% c_21.shadow="brightColorNumberPicker"  c_22.shadow="brightColorNumberPicker"
    //% c_23.shadow="brightColorNumberPicker"  c_24.shadow="brightColorNumberPicker"
    //% c_25.shadow="brightColorNumberPicker"  c_26.shadow="brightColorNumberPicker"
    //% c_27.shadow="brightColorNumberPicker"  c_28.shadow="brightColorNumberPicker"
    //% c_29.shadow="brightColorNumberPicker"  c_30.shadow="brightColorNumberPicker"
    //% c_31.shadow="brightColorNumberPicker"  c_32.shadow="brightColorNumberPicker"
    //% c_1.defl='#000000'  c_2.defl='#000000'  c_3.defl='#000000'  c_4.defl='#000000'
    //% c_5.defl='#000000'  c_6.defl='#000000'  c_7.defl='#000000'  c_8.defl='#000000'
    //% c_9.defl='#000000'  c_10.defl='#000000' c_11.defl='#000000' c_12.defl='#000000'
    //% c_13.defl='#000000' c_14.defl='#000000' c_15.defl='#000000' c_16.defl='#000000'
    //% c_17.defl='#000000' c_18.defl='#000000' c_19.defl='#000000' c_20.defl='#000000'
    //% c_21.defl='#000000' c_22.defl='#000000' c_23.defl='#000000' c_24.defl='#000000'
    //% c_25.defl='#000000' c_26.defl='#000000' c_27.defl='#000000' c_28.defl='#000000'
    //% c_29.defl='#000000' c_30.defl='#000000' c_31.defl='#000000' c_32.defl='#000000'
    //% inlineInputMode=inline
    export function colorForLed_32(
        c_1: number,  c_2: number,  c_3: number,  c_4: number,
        c_5: number,  c_6: number,  c_7: number,  c_8: number,
        c_9: number,  c_10: number, c_11: number, c_12: number,
        c_13: number, c_14: number, c_15: number, c_16: number,
        c_17: number, c_18: number, c_19: number, c_20: number,
        c_21: number, c_22: number, c_23: number, c_24: number,
        c_25: number, c_26: number, c_27: number, c_28: number,
        c_29: number, c_30: number, c_31: number, c_32: number
    ): ColorPattern {
        return new ColorPattern([
            c_1,  c_2,  c_3,  c_4,  c_5,  c_6,  c_7,  c_8,
            c_9,  c_10, c_11, c_12, c_13, c_14, c_15, c_16,
            c_17, c_18, c_19, c_20, c_21, c_22, c_23, c_24,
            c_25, c_26, c_27, c_28, c_29, c_30, c_31, c_32,
        ]);
    }

    // ─────────────────────────────────────────────────────────────────────────
    // Ultrasonic sensor
    // ─────────────────────────────────────────────────────────────────────────

    export enum startbit_ultrasonicPort {
        P2_P1   = 0x01,
        P14_P13 = 0x02,
    }

    let echoPin: DigitalPin;
    let trigPin: DigitalPin;

    //% weight=170
    //% blockId=ultrasonic_init
    //% block="initialize ultrasonic |%port"
    //% block.loc.de="initialisiere Ultraschall|%port"
    //% subcategory="Eingabe"
    //% group="Ultraschall"
    export function ultrasonic_init(port: startbit_ultrasonicPort) {
        if (port == startbit_ultrasonicPort.P2_P1) {
            echoPin = DigitalPin.P2;
            trigPin = DigitalPin.P1;
        } else {
            echoPin = DigitalPin.P14;
            trigPin = DigitalPin.P13;
        }
    }

    let distanceBak = 0;

    //% weight=160
    //% blockId=startbit_ultrasonic
    //% block="get ultrasonic |distancse (cm)"
    //% block.loc.de="Ultraschall|Distanz (cm)"
    //% subcategory="Eingabe"
    //% group="Ultraschall"
    export function startbit_ultrasonic(): number {
        pins.setPull(echoPin, PinPullMode.PullNone);
        pins.setPull(trigPin, PinPullMode.PullNone);

        pins.digitalWritePin(trigPin, 0);
        control.waitMicros(2);
        pins.digitalWritePin(trigPin, 1);
        control.waitMicros(10);
        pins.digitalWritePin(trigPin, 0);
        control.waitMicros(5);

        let d = pins.pulseIn(echoPin, PulseValue.High, 25000);
        // Filter out spurious zero readings
        if (d == 0 && distanceBak != 0) d = distanceBak;
        distanceBak = d;

        return Math.round((d * 10) / 6 / 58 / 1.6);
    }

    // ─────────────────────────────────────────────────────────────────────────
    // Servo motor
    // ─────────────────────────────────────────────────────────────────────────

    export enum ServoIndex {
        //% block="S1"
        S1 = 1,
        //% block="S2"
        S2,
        //% block="S3"
        S3,
        //% block="S4"
        S4,
        //% block="S5"
        S5,
        //% block="S6"
        S6,
    }

    //% weight=100
    //% blockId=setServo
    //% block="set servo motor %index| angle (°) %angle| duration (ms) %duration"
    //% angle.shadow="protractorPicker"
    //% block.loc.de="setze Servomotor %index| auf Winkel (0 - 180°) %angle|für Dauer (ms) %duration"
    //% index.defl=1
    //% duration.shadow=timePicker
    //% inlineInputMode=inline
    //% subcategory=Servo/Motor
    //% group=Servo
    export function setPwmServo(index: ServoIndex = 1, angle: number, duration: number = 300) {
        const position = mapValue(angle, 0, 180, 500, 2500);
        let buf    = pins.createBuffer(10);
        buf[0]     = 0x55;
        buf[1]     = 0x55;
        buf[2]     = 0x08;
        buf[3]     = 0x03; // cmd type
        buf[4]     = 0x01;
        buf[5]     = duration & 0xff;
        buf[6]     = (duration >> 8) & 0xff;
        buf[7]     = index;
        buf[8]     = position & 0xff;
        buf[9]     = (position >> 8) & 0xff;
        serial.writeBuffer(buf);
        basic.pause(1);
    }

    // ─────────────────────────────────────────────────────────────────────────
    // DC motors
    // ─────────────────────────────────────────────────────────────────────────

    //% weight=96 blockId=startbit_setMotorSpeed
    //% block="Set %motor| in direction %direction| with speed %speed (0-100)"
    //% block.loc.de="%motor | in Richtung %direction | mit Geschwindigkeit %speed (0-100)"
    //% speed.min=0 speed.max=100
    //% subcategory=Servo/Motor
    //% group=Motor
    export function startbit_setMotorSpeed(motor: HiwonderMotors, direction: MotorDirections, speed: number) {
        if (speed < 0 || speed > 100) return;

        // Forward is represented as negative in the hardware protocol
        const adjusted = direction == MotorDirections.Forward ? -speed : speed;

        if (motor == HiwonderMotors.M1 || motor == HiwonderMotors.M12) motor_1_speed = adjusted;
        if (motor == HiwonderMotors.M2 || motor == HiwonderMotors.M12) motor_2_speed = adjusted;

        send_motor_speeds();
    }

    //% weight=94 blockId=startbit_stopMotor
    //% block="Stop %motor"
    //% block.loc.de="%motor stoppen"
    //% subcategory=Servo/Motor
    //% group=Motor
    export function startbit_stopMotor(motor: HiwonderMotors) {
        if (motor == HiwonderMotors.M1 || motor == HiwonderMotors.M12) motor_1_speed = 0;
        if (motor == HiwonderMotors.M2 || motor == HiwonderMotors.M12) motor_2_speed = 0;
        send_motor_speeds();
    }

    function send_motor_speeds(): void {
        let buf = pins.createBuffer(6);
        buf[0] = 0x55;
        buf[1] = 0x55;
        buf[2] = 0x04;
        buf[3] = 0x32; // cmd type
        buf[4] = motor_1_speed;
        buf[5] = motor_2_speed;
        serial.writeBuffer(buf);
    }

    // ─────────────────────────────────────────────────────────────────────────
    // Push-button / Trittmatte
    // ─────────────────────────────────────────────────────────────────────────

    export enum startbit_trittmattePort {
        P2  = 0x01,
        P14 = 0x02,
        P16 = 0x03,
        P1  = 0x04,
        P13 = 0x05,
    }

    const TRITTMATTE_PIN: { [key: number]: DigitalPin } = {
        // Inline mapping used in every trittmatte function
    };

    const debounce_time = 150; // ms

    /** Maps a startbit_trittmattePort to the corresponding DigitalPin. */
    function trittmattePin(port: startbit_trittmattePort): DigitalPin {
        switch (port) {
            case startbit_trittmattePort.P2:  return DigitalPin.P2;
            case startbit_trittmattePort.P1:  return DigitalPin.P1;
            case startbit_trittmattePort.P14: return DigitalPin.P14;
            case startbit_trittmattePort.P13: return DigitalPin.P13;
            default:                          return DigitalPin.P16;
        }
    }

    function setupPinPulse(pin: DigitalPin): void {
        pins.setEvents(pin, PinEventType.Pulse);
        pins.setPull(pin, PinPullMode.PullUp);
    }

    //% weight=8
    //% block="Push-button pressed|on %port"
    //% block.loc.de="Taster gedrückt|auf|%port"
    //% subcategory="Eingabe"
    //% group="Taster"
    export function trittmatte_pressed(port: startbit_trittmattePort, handler: () => void): void {
        const pin = trittmattePin(port);
        setupPinPulse(pin);
        pins.onPulsed(pin, PulseValue.High, () => {
            if (pins.pulseDuration() > 1000 * debounce_time) handler();
        });
    }

    //% weight=12
    //% block="Push-button released|on %port"
    //% block.loc.de="Taster losgelassen|auf|%port"
    //% subcategory="Eingabe"
    //% group="Taster"
    export function trittmatte_released(port: startbit_trittmattePort, handler: () => void): void {
        const pin = trittmattePin(port);
        setupPinPulse(pin);
        pins.onPulsed(pin, PulseValue.Low, () => {
            if (pins.pulseDuration() > 1000 * debounce_time) handler();
        });
    }

    //% weight=20
    //% block="Push-button on/off|on %port |state "
    //% block.loc.de="Taster ein/aus|auf %port |Status"
    //% subcategory="Eingabe"
    //% group="Taster"
    //% draggableParameters
    export function trittmatte_einschalten(
        port: startbit_trittmattePort,
        handler: (Schalter_ein: boolean) => void
    ): void {
        const pin = trittmattePin(port);
        setupPinPulse(pin);
        let state = false;
        pins.onPulsed(pin, PulseValue.High, () => {
            if (pins.pulseDuration() > 1000 * debounce_time) {
                state = !state;
                handler(state);
            }
        });
    }

    // ─────────────────────────────────────────────────────────────────────────
    // Serial / board init
    // ─────────────────────────────────────────────────────────────────────────

    function isSimulator(): boolean {
        try {
            serial.writeString("");
            return false;
        } catch (e) {
            return true;
        }
    }

    export function startbit_Init() {
        serial.redirect(SerialPin.P12, SerialPin.P8, BaudRate.BaudRate115200);
        basic.forever(() => {
            getHandleCmd();
            if (0 < currentVoltage && currentVoltage < 6800) {
                music.playTone(988, music.beat(BeatFraction.Whole));
            }
        });
        basic.pause(2000);
        console.log("Informatiktheater initialized");
    }

    let handleCmd     = "";
    let currentVoltage = 0;

    const MESSAGE_MAC   = 0xff;
    const MESSAGE_ANGLE = 0x100;

    function getHandleCmd() {
        if (isSimulator()) return;

        const charStr = serial.readString();
        if (!charStr) return;

        handleCmd += charStr;
        if (countChar(handleCmd, "$") == 0) return;

        const index = findIndexof(handleCmd, "$", 0);
        if (index == -1) return;

        const cmd = handleCmd.substr(0, index);
        const firstChar = cmd.charAt(0);

        if (firstChar == "A" && cmd.length == 7) {
            const arg3Int = strToNumber(cmd.substr(5, 2));
            if (arg3Int != -1) {
                currentVoltage = Math.round(arg3Int * 78.63);
            }
        } else if (firstChar == "M" && cmd.length == 18) {
            control.raiseEvent(MESSAGE_MAC, 1);
        } else if (firstChar == "S" && cmd.length == 5) {
            const arg1Int = strToNumber(cmd.substr(1, 1));
            const arg2Str = cmd.substr(2, 3);
            if (arg2Str != "XXX") {
                const arg2Int = (arg2Str.charAt(0) == "F") ? 0 : Math.min(strToNumber(arg2Str), 1000);
                if      (arg1Int == 1) control.raiseEvent(MESSAGE_ANGLE, 1);
                else if (arg1Int == 2) control.raiseEvent(MESSAGE_ANGLE, 2);
            }
        }

        handleCmd = "";
    }

    function findIndexof(src: string, strFind: string, startIndex: number): number {
        for (let i = startIndex; i < src.length; i++) {
            if (src.charAt(i) == strFind) return i;
        }
        return -1;
    }

    function countChar(src: string, strFind: string): number {
        let cnt = 0;
        for (let i = 0; i < src.length; i++) {
            if (src.charAt(i) == strFind) cnt++;
        }
        return cnt;
    }

    /**
     * Parse a hexadecimal string (e.g. "3F") into a number.
     * Returns -1 if any character is not a valid hex digit.
     */
    function strToNumber(str: string): number {
        let num = 0;
        for (let i = 0; i < str.length; i++) {
            const digit = parseInt(str.charAt(i), 16);
            if (isNaN(digit)) return -1;
            if (i > 0) num *= 16;
            num += digit;
        }
        return num;
    }

    // ─────────────────────────────────────────────────────────────────────────
    // APDS-9960 colour sensor (internal helpers – not exposed as blocks)
    // ─────────────────────────────────────────────────────────────────────────

    const APDS9960_I2C_ADDR = 0x39;
    const APDS9960_ENABLE   = 0x80;
    const APDS9960_ATIME    = 0x81;
    const APDS9960_WTIME    = 0x83;
    const APDS9960_AILTL    = 0x84;
    const APDS9960_AILTH    = 0x85;
    const APDS9960_AIHTL    = 0x86;
    const APDS9960_AIHTH    = 0x87;
    const APDS9960_PERS     = 0x8c;
    const APDS9960_CONFIG1  = 0x8d;
    const APDS9960_PPULSE   = 0x8e;
    const APDS9960_CONTROL  = 0x8f;
    const APDS9960_CONFIG2  = 0x90;
    const APDS9960_CDATAL   = 0x94;
    const APDS9960_CDATAH   = 0x95;
    const APDS9960_POFFSET_UR = 0x9d;
    const APDS9960_POFFSET_DL = 0x9e;
    const APDS9960_CONFIG3  = 0x9f;

    const DEFAULT_ATIME   = 219;
    const DEFAULT_WTIME   = 246;
    const DEFAULT_PROX_PPULSE = 0x87;
    const DEFAULT_CONFIG1 = 0x60;
    const DEFAULT_AILT    = 0xffff;
    const DEFAULT_AIHT    = 0;
    const DEFAULT_PERS    = 0x11;
    const DEFAULT_CONFIG2 = 0x01;
    const DEFAULT_CONFIG3 = 0;
    const LED_DRIVE_100MA = 0;
    const AGAIN_4X        = 1;
    const ALL             = 7;

    function i2cwrite(reg: number, value: number) {
        let buf = pins.createBuffer(2);
        buf[0] = reg;
        buf[1] = value;
        pins.i2cWriteBuffer(APDS9960_I2C_ADDR, buf);
    }

    function i2cread(reg: number): number {
        pins.i2cWriteNumber(APDS9960_I2C_ADDR, reg, NumberFormat.UInt8BE);
        return pins.i2cReadNumber(APDS9960_I2C_ADDR, NumberFormat.UInt8BE);
    }

    function getMode(): number {
        return i2cread(APDS9960_ENABLE);
    }

    function setMode(mode: number, enable: number) {
        let reg = getMode();
        enable &= 0x01;
        if (mode >= 0 && mode <= 6) {
            if (enable) reg |= (1 << mode);
            else        reg &= 0xff - (1 << mode);
        } else if (mode == ALL) {
            reg = enable ? 0x7f : 0x00;
        }
        i2cwrite(APDS9960_ENABLE, reg);
    }

    function setLEDDrive(drive: number) {
        let val = i2cread(APDS9960_CONTROL);
        val = (val & 0b00111111) | ((drive & 0b11) << 6);
        i2cwrite(APDS9960_CONTROL, val);
    }

    function setAmbientLightGain(drive: number) {
        let val = i2cread(APDS9960_CONTROL);
        val = (val & 0b11111100) | (drive & 0b11);
        i2cwrite(APDS9960_CONTROL, val);
    }

    function setLightIntLowThreshold(threshold: number) {
        i2cwrite(APDS9960_AILTL, threshold & 0x00ff);
        i2cwrite(APDS9960_AILTH, (threshold & 0xff00) >> 8);
    }

    function setLightIntHighThreshold(threshold: number) {
        i2cwrite(APDS9960_AIHTL, threshold & 0x00ff);
        i2cwrite(APDS9960_AIHTH, (threshold & 0xff00) >> 8);
    }

    function InitColor(): boolean {
        setMode(ALL, 0);
        i2cwrite(APDS9960_ATIME,      DEFAULT_ATIME);
        i2cwrite(APDS9960_WTIME,      DEFAULT_WTIME);
        i2cwrite(APDS9960_PPULSE,     DEFAULT_PROX_PPULSE);
        i2cwrite(APDS9960_POFFSET_UR, 0);
        i2cwrite(APDS9960_POFFSET_DL, 0);
        i2cwrite(APDS9960_CONFIG1,    DEFAULT_CONFIG1);
        setLEDDrive(LED_DRIVE_100MA);
        setAmbientLightGain(AGAIN_4X);
        setLightIntLowThreshold(DEFAULT_AILT);
        setLightIntHighThreshold(DEFAULT_AIHT);
        i2cwrite(APDS9960_PERS,    DEFAULT_PERS);
        i2cwrite(APDS9960_CONFIG2, DEFAULT_CONFIG2);
        i2cwrite(APDS9960_CONFIG3, DEFAULT_CONFIG3);
        return true;
    }

    // ─────────────────────────────────────────────────────────────────────────
    // Misc helpers
    // ─────────────────────────────────────────────────────────────────────────

    function mapValue(x: number, in_min: number, in_max: number, out_min: number, out_max: number): number {
        return ((x - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
    }

    export enum startbit_LineFollowerSensors {
        //% block="S1"
        S1 = 1,
        //% block="S2"
        S2,
        //% block="S3"
        S3,
        //% block="S4"
        S4,
    }

    export enum startbit_LineColor {
        //% block="Black"
        //% block.loc.de="Schwarz"
        Black,
        //% block="White"
        //% block.loc.de="Weiss"
        White,
    }

} // end namespace informatiktheater
