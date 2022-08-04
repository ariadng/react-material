import Button from '../Button/Button';
import './FilledButton.scss';

const FilledButton = ({
	label,
	marginLeft,
	marginRight,
}) => {

	return (
		<Button
			className='filled'
			label={label}
			marginLeft={marginLeft}
			marginRight={marginRight}
		/>
	)

}
export default FilledButton;