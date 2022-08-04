import Button from '../Button/Button';
import './ElevatedButton.scss';

const ElevatedButton = ({
	label,
	marginLeft,
	marginRight,
}) => {

	return (
		<Button
			className='elevated'
			label={label}
			marginLeft={marginLeft}
			marginRight={marginRight}
		/>
	)

}
export default ElevatedButton;