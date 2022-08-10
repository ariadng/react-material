import { useContext, useState, useRef, useEffect } from 'react';
import ReactMaterialContext from '../../../context/ReactMaterialContext';

import ButtonConfig from './ButtonConfig';

const Button = ({
	label,
	disabled,
	defaultStyle,
	style: customStyle,
}) => {

	const config 		= ButtonConfig;
	const { getValue } 	= useContext(ReactMaterialContext);

	const [ layout, setLayout ] = useState(config.layout);
	const [ style, setStyle ]	= useState(config.state.default);

	const [ rippleSize, setRippleSize ] = useState('10000%');
	const [ ripplePos, setRipplePos ] = useState(['-50%', '-50%']);

	const updateStyle = (updatedStyle = { container: {}, label: {}, icon: {} }) => {

		const newStyle = {
			container: {
				...config.state.default.container,
				...(defaultStyle ? defaultStyle.state.default.container : {}),
				...updatedStyle.container,
			},
			label: {
				...config.state.default.label,
				...(defaultStyle ? defaultStyle.state.default.label : {}),
				...updatedStyle.label,
			},
			icon: {
				...config.state.default.icon,
				...(defaultStyle ? defaultStyle.state.default.icon : {}),
				...updatedStyle.icon,
			},
		};
		setStyle(newStyle);
	}

	useEffect(() => {
		if (defaultStyle) updateStyle();
	}, [defaultStyle]);

	useEffect(() => {
		if (disabled) {
			let newStyle = config.state.disabled;
			if (defaultStyle) {
				newStyle = {
					container: {
						...newStyle.container,
						...defaultStyle.state.disabled.container,
					},
					label: {
						...newStyle.label,
						...defaultStyle.state.disabled.label,
					},
					icon: {
						...newStyle.icon,
						...defaultStyle.state.disabled.icon,
					},
				};
			}
			updateStyle(newStyle);
		}
	}, [disabled]);

	const onMouseEnterHandler = () => {
		if (!disabled) {
			let newStyle = config.state.hovered;
			if (defaultStyle) {
				newStyle = {
					container: {
						...newStyle.container,
						...defaultStyle.state.hovered.container,
					},
					label: {
						...newStyle.label,
						...defaultStyle.state.hovered.label,
					},
					icon: {
						...newStyle.icon,
						...defaultStyle.state.hovered.icon,
					},
				};
			}
			updateStyle(newStyle);
		}
	};

	const onMouseLeaveHandler = () => {
		if (!disabled) updateStyle();
	};
	
	const onMouseDownHandler = (event) => {
		if (!disabled) {
			
			const w = event.target.offsetWidth / 2;
			const h = event.target.offsetHeight / 2;
			const y = event.pageY - event.target.offsetTop - h;
			const x = event.pageX - event.target.offsetLeft - w;
			const top = `calc(-50% + ${y}px)`;
			const left = `calc(-50% + ${x}px)`;
			
			let newStyle = config.state.pressed;
			if (defaultStyle) {
				newStyle = {
					container: {
						...newStyle.container,
						...defaultStyle.state.pressed.container,
					},
					label: {
						...newStyle.label,
						...defaultStyle.state.pressed.label,
					},
					icon: {
						...newStyle.icon,
						...defaultStyle.state.pressed.icon,
					},
				};
			}

			updateStyle(newStyle);
			setRippleSize('100%');
			setRipplePos([top, left]);

		}
	};

	const onMouseUpHandler = () => {
		if (!disabled) {
			updateStyle();
			setRippleSize('10000%');
		}
	};

	const onClickHandler = (event) => {}

	return (
		<button
			onMouseEnter={onMouseEnterHandler}
			onMouseLeave={onMouseLeaveHandler}
			onMouseDown={onMouseDownHandler}
			onMouseUp={onMouseUpHandler}
			onClick={onClickHandler}
			style={{
				cursor	: disabled ? getValue('md.sys.state.disabled.cursor') : 'pointer',
				...(customStyle ? customStyle : {}),
			}}
		>

			{/* Container */}
			<div style={{
				display			: 'inline-flex',
				alignItems		: 'center',
				position		: 'relative',
				overflow		: 'hidden',
				height			: layout.height,
				paddingLeft		: layout.paddingLeft,
				paddingRight	: layout.paddingRight,
				borderRadius	: layout.shape,
				pointerEvents	: 'none',
			}}>
				
				{/* Label */}
				<div style={{
					zIndex		: 30,
					color		: getValue(style.label.color),
					opacity 	: style.label.opacity ? getValue(style.label.opacity) : 1,
					pointerEvents: 'none',
					userSelect	: 'none',
				}}>{label}</div>

				{/* State Layer */}
				<div style={{
					position		: 'absolute',
					top 			: ripplePos[0],
					left 			: ripplePos[1],
					zIndex			: 20,
					width 			: '200%',
					height 			: '200%',
					backgroundColor	: typeof style.container.stateLayerColor !== 'undefined'	? getValue(style.container.stateLayerColor)		: 'transparent',
					opacity 		: typeof style.container.stateLayerOpacity !== 'undefined' 	? getValue(style.container.stateLayerOpacity) 	: 0,
					transition		: `all ${style.container.transitionDuration ? getValue(style.container.transitionDuration) : '0.8s'} ease-out`,
					backgroundImage	: `radial-gradient(circle, transparent 1%, #000 1%)`,
					backgroundSize	: rippleSize,
					backgroundPosition	: 'center center',
					pointerEvents		: 'none',
				}}></div>

				{/* Background Layer */}
				<div style={{
					position		: 'absolute',
					top 			: 0,
					left 			: 0,
					zIndex			: 10,
					width 			: '100%',
					height 			: '100%',
					backgroundColor	: getValue(style.container.color),
					opacity 		: style.container.opacity ? getValue(style.container.opacity) : 1,
					pointerEvents	: 'none',
				}}></div>

			</div>

		</button>
	)

}
export default Button;