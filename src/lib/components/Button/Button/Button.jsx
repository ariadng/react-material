import './Button.scss';

const Button = ({
	label,
	className,
	marginLeft,
	marginRight,
}) => {

	const style = {
		marginLeft: marginLeft ? marginLeft + 'rem' : '0',
		marginRight: marginRight ? marginRight + 'rem' : '0',
	}

	return (
		<button
			className={`rm_button ${className ?? className}`}
			style={style}
		>
			{label}
		</button>
	)

}
export default Button;