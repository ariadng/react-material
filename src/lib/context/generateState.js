import generatePaletteState from "./generatePaletteState";

const generateState = (config = undefined) => {

	const scheme	= config.scheme ? config.scheme : 'light';
	const palette 	= generatePaletteState(config.palette);
	const color 	= {};

	color['primary']				= { light: palette.primary['40'],		dark: palette.primary['80'] };
	color['primary-container']		= { light: palette.primary['90'], 		dark: palette.primary['30'] };
	color['secondary']				= { light: palette.secondary['40'], 	dark: palette.secondary['80'] };
	color['secondary-container']	= { light: palette.secondary['90'], 	dark: palette.secondary['30'] };
	color['tertiary']				= { light: palette.tertiary['40'],		dark: palette.tertiary['80'] };
	color['tertiary-container']		= { light: palette.tertiary['90'], 		dark: palette.tertiary['30'] };
	color['surface']				= { light: palette.neutral['99'], 		dark: palette.neutral['10'] };
	color['background']				= { light: palette.neutral['99'], 		dark: palette.neutral['10'] };
	color['error']					= { light: palette.error['40'], 		dark: palette.error['80'] };
	color['error-container']		= { light: palette.error['90'], 		dark: palette.error['30'] };
	color['on-primary']				= { light: palette.primary['100'], 		dark: palette.primary['20'] };
	color['on-primary-container']	= { light: palette.primary['20'], 		dark: palette.primary['100'] };
	color['on-secondary']			= { light: palette.secondary['100'], 	dark: palette.secondary['20'] };
	color['on-secondary-container']	= { light: palette.secondary['20'], 	dark: palette.secondary['100'] };
	color['on-tertiary']			= { light: palette.tertiary['100'], 	dark: palette.tertiary['20'] };
	color['on-tertiary-container']	= { light: palette.tertiary['20'], 		dark: palette.tertiary['100'] };
	color['on-surface']				= { light: palette.neutral['10'], 		dark: palette.neutral['90'] };
	color['on-error']				= { light: palette.error['100'], 		dark: palette.error['20'] };
	color['on-error-container']		= { light: palette.error['10'], 		dark: palette.error['80'] };
	color['on-background']			= { light: palette.neutral['10'], 		dark: palette.neutral['90'] };
	color['shadow']					= { light: palette.neutral['0'], 		dark: palette.neutral['0'] };
	color['surface-tint-color']		= color['primary'];
	color['inverse-surface']		= { light: palette.neutral['20'], 		dark: palette.neutral['90'] };
	color['inverse-on-surface']		= { light: palette.neutral['95'], 		dark: palette.neutral['20'] };
	color['inverse-primary']		= { light: palette.primary['80'], 		dark: palette.primary['40'] };

	const elevation = {
		level: {},
	};

	elevation.level['0']	= 0;
	elevation.level['1']	= 1;
	elevation.level['2']	= 2;
	elevation.level['3']	= 3;

	const state = {};

	state.disabled = {
		'container-opacity'		: 0.12,
		'label-opacity'			: 0.38,
		'icon-opacity'			: 0.38,
		'cursor'				: 'not-allowed'
	};
	state.hover = {
		'state-layer-opacity'	: 0.1,
		'transition-duration'	: '0.3s',
	};
	state.focus = {
		'state-layer-opacity'	: 0,
	};
	state.pressed = {
		'state-layer-opacity'	: 0.1,
		'transition-duration'	: '0s',
	};

	const ref 	= { palette };
	const sys 	= { color, elevation, state };
	const md	= { ref, sys };

	const getValue = (tokenString) => {
		const token = tokenString.split('.');
		let value = md;
		for (let i = 0; i < token.length; i++) {
			const t = token[i];
			if (typeof value[t] !== 'undefined') {
				value = value[t];
			}
		}
		if (value[scheme]) {
			value = value[scheme];
		}
		return typeof value !== 'undefined' ? value : undefined;
	}
	
	return { ref, sys, getValue };
};
export default generateState;