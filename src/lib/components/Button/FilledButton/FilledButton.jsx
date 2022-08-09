

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
			color='primary'
			bgTone='40'
			fgTone='100'
			rippleTone='30'
			marginLeft={marginLeft}
			marginRight={marginRight}
		/>
	)

}
export default FilledButton;