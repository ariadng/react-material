

import Button from '../Button/Button';
import FilledButtonConfig from './FilledButtonConfig';

const FilledButton = ({
	label,
	disabled,
	style,
}) => {

	return (
		<Button
			label={label}
			disabled={disabled}
			defaultStyle={FilledButtonConfig}
			style={style}
		/>
	)

}
export default FilledButton;