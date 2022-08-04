import Button from '../Button/Button';
import './OutlinedButton.scss';

const OutlinedButton = ({
	label,
	marginLeft,
	marginRight,
}) => {

	return (
		<Button
			className='outlined'
			label={label}
			marginLeft={marginLeft}
			marginRight={marginRight}
		/>
	)

}
export default OutlinedButton;