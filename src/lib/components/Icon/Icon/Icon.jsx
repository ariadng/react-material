import '../fonts/MaterialIcon.scss';

const Icon = ({
	name,
	size,
}) => {

	console.log(size)

	const defaultIconSize = {
		small: '1rem',
		medium: '1.5rem',
		large: '2rem',
	}

	const style = {
		fontSize: !size ? defaultIconSize['medium'] : defaultIconSize[size] ? defaultIconSize[size] : (size + 'rem'),
	};

	return (
		<div className='rm-icon' style={style}>{name}</div>
	);

}
export default Icon;