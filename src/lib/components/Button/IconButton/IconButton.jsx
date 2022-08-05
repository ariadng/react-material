import Button from '../Button/Button';
import './IconButton.scss';

const IconButton = ({
	icon,
	marginLeft,
	marginRight,
}) => {

	return (
		<Button
			className='icon-only'
			icon={icon}
			marginLeft={marginLeft}
			marginRight={marginRight}
		/>
	)

}
export default IconButton;