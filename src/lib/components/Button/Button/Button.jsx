import { useContext, useState, useRef, useEffect } from 'react';
import ReactMaterialContext from '../../../context/ReactMaterialContext';

import DefaultButtonConfig from './DefaultButtonConfig';

const Button = ({
	label,
	disabled,
	
}) => {

	const config 		= DefaultButtonConfig;
	const { getValue } 	= useContext(ReactMaterialContext);

	const [ layout, setLayout ] = useState(config.layout);
	const [ style, setStyle ]	= useState(config.state.default);

	const [ rippleSize, setRippleSize ] = useState('10000%');
	const [ ripplePos, setRipplePos ] = useState(['-50%', '-50%']);

	useEffect(() => {

	}, []);

	useEffect(() => {
		if (disabled) {
			const updatedStyle = {
				container: {
					...config.state.default.container,
					...config.state.disabled.container,
				},
				label: {
					...config.state.default.label,
					...config.state.disabled.label,
				},
				icon: {
					...config.state.default.icon,
					...config.state.disabled.icon,
				},
			};
			setStyle(updatedStyle);
		}
	}, [disabled]);

	const onMouseEnterHandler = () => {
		if (!disabled) {
			const updatedStyle = {
				container: {
					...config.state.default.container,
					...config.state.hovered.container,
				},
				label: {
					...config.state.default.label,
					...config.state.hovered.label,
				},
				icon: {
					...config.state.default.icon,
					...config.state.hovered.icon,
				},
			};
			setStyle(updatedStyle);
		}
	};

	const onMouseLeaveHandler = () => {
		if (!disabled) {
			setStyle(config.state.default);
		}
	};
	
	const onMouseDownHandler = (event) => {
		if (!disabled) {
			const updatedStyle = {
				container: {
					...config.state.default.container,
					...config.state.pressed.container,
				},
				label: {
					...config.state.default.label,
					...config.state.pressed.label,
				},
				icon: {
					...config.state.default.icon,
					...config.state.pressed.icon,
				},
			};
			setStyle(updatedStyle);
			setRippleSize('100%');

			const w = event.target.offsetWidth / 2;
			const h = event.target.offsetHeight / 2;
			const y = event.pageY - event.target.offsetTop - h;
			const x = event.pageX - event.target.offsetLeft - w;
			const top = `calc(-50% + ${y}px)`;
			const left = `calc(-50% + ${x}px)`;
			setRipplePos([top, left]);

		}
	};

	const onMouseUpHandler = () => {
		if (!disabled) {
			setStyle(config.state.default);
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