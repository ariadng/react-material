import hexToRGB from '../utils/hexToRGB';
import RGBToHSL from '../utils/RGBToHSL';
import generateColorPalette from '../utils/generateColorPalette';

const defaultConfig = {
	primary: '#386a20',
	secondary: '#55624c',
	tertiary: '#19686a',
	neutral: '#5d5f5a',
	error: '#b3261e',
};

const generatePaletteState = (config = {}) => {
	
	const primaryColor		= config.primary 	? config.primary 	: defaultConfig.primary;
	const secondaryColor	= config.secondary 	? config.secondary 	: defaultConfig.secondary;
	const tertiaryColor		= config.tertiary 	? config.tertiary 	: defaultConfig.tertiary;
	const neutralColor		= config.neutral 	? config.neutral 	: defaultConfig.neutral;
	const errorColor		= config.error 	? config.error 	: defaultConfig.error;
	
	const rgb = {
		primary: hexToRGB(primaryColor),
		secondary: hexToRGB(secondaryColor),
		tertiary: hexToRGB(tertiaryColor),
		neutral: hexToRGB(neutralColor),
		error: hexToRGB(errorColor),
	};
	
	const hsl = {
		primary: RGBToHSL(...rgb.primary),
		secondary: RGBToHSL(...rgb.secondary),
		tertiary: RGBToHSL(...rgb.tertiary),
		neutral: RGBToHSL(...rgb.neutral),
		error: RGBToHSL(...rgb.error),
	};

	return {
		primary: generateColorPalette(hsl.primary),
		secondary: generateColorPalette(hsl.secondary),
		tertiary: generateColorPalette(hsl.tertiary),
		neutral: generateColorPalette(hsl.neutral),
		error: generateColorPalette(hsl.error),
	};
};
export default generatePaletteState;