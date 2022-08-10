import { Button, FilledButton, FilledTonalButton, OutlinedButton } from './lib/components/Button';
import { ColorPalette } from "./lib/components/ColorPalette";

function App() {
	return (
		<div className="p-[50px]">

			<div className='flex items-center'>
				<Button label='Normal Button' style={{ marginRight: '1rem' }} />
				<Button label='Disabled Normal' disabled={true} style={{ marginRight: '1rem' }} />
				<FilledButton label='Filled Button' style={{ marginRight: '1rem' }} />
				<FilledButton label='Disabled Filled' disabled={true} style={{ marginRight: '1rem' }} />
			</div>

			<div className='mt-[50px]'>
				<ColorPalette color='primary' className='mb-[25px]'/>
				<ColorPalette color='secondary' className='mb-[25px]'/>
				<ColorPalette color='tertiary' className='mb-[25px]'/>
				<ColorPalette color='neutral' className='mb-[25px]'/>
			</div>


			
		</div>
	);
}

export default App;
