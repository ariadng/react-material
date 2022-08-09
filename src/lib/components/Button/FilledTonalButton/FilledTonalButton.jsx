import Button from '../Button/Button';
import './FilledTonalButton.scss';

const FilledTonalButton = ({
	label,
	marginLeft,
	marginRight,
}) => {

	return (
		<Button
			className='filled'
			label={label}
			color='primary'
			bgTone='80'
			fgTone='10'
			rippleTone='70'
			marginLeft={marginLeft}
			marginRight={marginRight}
		/>
	)

}
export default FilledTonalButton;