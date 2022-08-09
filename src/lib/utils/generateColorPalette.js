import HSLToRGB from "./HSLToRGB";
import RGBToHex from "./RGBToHex";

const generateColorPalette = (color) => {

	const [hue, saturation, luminance] = color;

	const palette = {
		'0'		: { s: 100, l: 0 },
		'10'	: { s: saturation + 15, l: Math.max(luminance - 30, 6) },
		'20'	: { s: saturation + 10, l: Math.max(luminance - 30, 11) },
		'30'	: { s: saturation + 5, 	l: Math.max(luminance - 30, 17) },
		'40'	: { s: saturation, 		l: luminance},
		'50'	: { s: saturation, 	l: luminance + 10 },
		'60'	: { s: saturation, l: luminance + 20 },
		'70'	: { s: saturation, l: luminance + 30 },
		'80'	: { s: saturation + 10, l: luminance + 40 },
		'90'	: { s: saturation + 25, l: Math.min(luminance + 50, 93) },
		'95'	: { s: saturation + 30, l: Math.min(luminance + 55, 95) },
		'99'	: { s: saturation + 35, l: Math.min(luminance + 70, 99) },
		'100'	: { s: saturation, l: 100 },
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