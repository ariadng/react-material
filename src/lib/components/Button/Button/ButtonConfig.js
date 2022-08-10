const config = {
	layout: {},
	state: {},
};

// Default state
config.state.default = {
	container: {
		color: 'md.sys.color.secondary-container',
		shadowColor: 'md.sys.color.shadow',
		elevation: 'md.sys.elevation.level.0',
	},
	label: {
		color: 'md.sys.color.on-secondary-container',
		font: 'md.sys.typescale.label-large.font',
		lineHeight: 'md.sys.typescale.label-large.line-height',
		size: 'md.sys.typescale.label-large.size',
		tracking: 'md.sys.typescale.label-large.tracking',
		weight: 'md.sys.typescale.label-large.weight',
	},
	icon: {
		color: 'md.sys.color.on-secondary-container',
	},
};

// Disabled state
config.state.disabled = {
	container: {
		color: 'md.sys.color.on-surface',
		opacity: 'md.sys.state.disabled.container-opacity',
	},
	label: {
		color: 'md.sys.color.on-surface',
		opacity: 'md.sys.state.disabled.label-opacity',
	},
	icon: {
		color: 'md.sys.color.on-surface',
		opacity: 'md.sys.state.disabled.icon-opacity',
	},
};

// Hovered state
config.state.hovered = {
	container: {
		stateLayerColor: 'md.sys.color.on-secondary-container',
		stateLayerOpacity: 'md.sys.state.hover.state-layer-opacity',
		elevation: 'md.sys.elevation.level.1',
		transitionDuration: 'md.sys.state.hover.transition-duration',
	},
	label: {
		color: 'md.sys.color.on-secondary-container',
	},
	icon: {
		color: 'md.sys.color.on-secondary-container'
	},
};

// Focused state
config.state.focused = {
	container: {
		stateLayerColor: 'md.sys.color.on-secondary-container',
		stateLayerOpacity: 'md.sys.state.focus.state-layer-opacity',
		elevation: 'md.sys.elevation.level.0',
	},
	label: {
		color: 'md.sys.color.on-secondary-container',
	},
	icon: {
		color: 'md.sys.color.on-secondary-container',
	},
};

// Pressed state
config.state.pressed = {
	container: {
		stateLayerColor: 'md.sys.color.on-secondary-container',
		stateLayerOpacity: 'md.sys.state.pressed.state-layer-opacity',
		elevation: 'md.sys.elevation.level.0',
		transitionDuration: 'md.sys.state.pressed.transition-duration',
	},
	label: {
		color: 'md.sys.color.on-secondary-container',
	},
	icon: {
		color: 'md.sys.color.on-secondary-container',
	}
};

// [ Layout ]
config.layout = {
	height					: '2.5rem', 	// 40dp
	shape					: '1.25rem',	// 20dp
	iconSize				: '1.125rem',	// 18dp
	paddingLeft				: '1.5rem',		// 24dp
	paddingRight			: '1.5rem',		// 24dp
	paddingLeftWithIcon		: '1.125rem',	// 18dp
	paddingRightWithIcon	: '1.5rem',		// 24dp
	paddingBetweenElements	: '0.5rem',		// 8dp
	labelTextAlignment		: 'center',
};

export default config;