import { useContext } from 'react';
import ReactMaterialContext from '../../context/ReactMaterialContext';

const ColorPalette = ({
	color,
	className,
}) => {

	const { ref } = useContext(ReactMaterialContext);
	
	const palette = ref.palette[color];

	

	return (
		<div className={`flex ${className ? className : ''}`}>
			{Object.keys(palette).map(tone =>
				<div key={tone} className='w-20 h-32 flex p-4 items-start justify-center' style={{
					backgroundColor: palette[tone]
				}}>
					<div className={`${tone > 50 ? 'text-black' : 'text-white'}`}>{tone}</div>
				</div>	
			)}
		</div>
	)
};
export default ColorPalette;