import { Icon } from '../../Icon';
import './Button.scss';

const Button = ({
	label,
	icon,
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
			{label && !icon &&
				<div className='label'>{label}</div>
			}

			{icon && !label &&
				<Icon name={icon} />
			}
		</button>
	)

}
export default Button;