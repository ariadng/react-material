import HSLToRGB from "./HSLToRGB";
import RGBToHex from "./RGBToHex";

const generateColorPalette = (color) => {

	const [hue, saturation, luminance] = color;

	const palette = {
		'0'		: { s: 100, l: 0 },
		'10'	: { s: Math.min(saturation + 15, 100), 	l: Math.max(luminance - 30, 10) },
		'20'	: { s: Math.min(saturation + 10, 100), 	l: Math.max(luminance - 20, 15) },
		'30'	: { s: Math.min(saturation + 5, 100), 	l: Math.max(luminance - 10, 25) },
		'40'	: { s: saturation, l: Math.max(luminance, 35) },
		'50'	: { s: saturation, l: Math.max(luminance + 10, 45) },
		'60'	: { s: saturation, l: Math.max(luminance + 20, 55) },
		'70'	: { s: Math.min(saturation + 5, 100), l: Math.max(luminance + 30, 65) },
		'80'	: { s: Math.min(saturation + 10, 100), l: Math.min(luminance + 40, 86) },
		'90'	: { s: Math.min(saturation + 25, 100), l: Math.min(luminance + 50, 93) },
		'95'	: { s: Math.min(saturation + 30, 100), l: Math.min(luminance + 55, 95) },
		'99'	: { s: Math.min(saturation + 35, 100), l: Math.min(luminance + 70, 97) },
		'100'	: { s: Math.min(saturation + 40, 100), l: 100 },
	};

	const result = {};

	Object.keys(palette).forEach(tone => {
		const rgb = HSLToRGB(hue, palette[tone].s, palette[tone].l);
		const hex = RGBToHex(...rgb);
		result[tone] = hex;
	});

	return result;

};
export default generateColorPalette;