import Button from '../Button/Button';
import './FilledTonalButton.scss';

const FilledTonalButton = ({
	label,
	marginLeft,
	marginRight,
}) => {

	return (
		<Button
			className='filled-tonal'
			label={label}
			marginLeft={marginLeft}
			marginRight={marginRight}
		/>
	)

}
export default FilledTonalButton;