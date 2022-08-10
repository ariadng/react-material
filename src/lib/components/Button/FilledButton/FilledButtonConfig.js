const config = {
	layout: {},
	state: {},
};

// Default state
config.state.default = {
	container: {
		color: 'md.sys.color.primary',
	},
	label: {
		color: 'md.sys.color.on-primary',
	},
	icon: {
		color: 'md.sys.color.on-primary',
	},
};

// Disabled state
config.state.disabled = {
	container: {},
	label: {},
	icon: {},
};

// Hovered state
config.state.hovered = {
	container: {
		stateLayerColor: 'md.sys.color.on-primary',
	},
	label: {
		color: 'md.sys.color.on-primary',
	},
	icon: {
		color: 'md.sys.color.on-primary',
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
		stateLayerColor: 'md.sys.color.on-primary',
	},
	label: {
		color: 'md.sys.color.on-primary',
	},
	icon: {
		color: 'md.sys.color.on-primary',
	}
};

// [ Layout ]
config.layout = {
	height: '2.5rem', 	// 40dp
	shape: '1.25rem',	// 20dp
	iconSize: '1.125rem',	// 18dp
	paddingLeft: '1.5rem',		// 24dp
	paddingRight: '1.5rem',		// 24dp
	paddingLeftWithIcon: '1.125rem',	// 18dp
	paddingRightWithIcon: '1.5rem',		// 24dp
	paddingBetweenElements: '0.5rem',		// 8dp
	labelTextAlignment: 'center',
};

export default config;