import Button from '../Button/Button';
import './OutlinedButton.scss';

const OutlinedButton = ({
	label,
	marginLeft,
	marginRight,
}) => {

	return (
		<Button
			className='filled'
			label={label}
			color='primary'
			bgTone='-1'
			fgTone='40'
			outline='1'
			marginLeft={marginLeft}
			marginRight={marginRight}
		/>
	)

}
export default OutlinedButton;