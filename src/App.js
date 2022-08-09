import { Button, FilledButton, FilledTonalButton, OutlinedButton } from './lib/components/Button';
import { ColorPalette } from "./lib/components/ColorPalette";

function App() {
	return (
		<div className="p-[50px]">

			<div className='flex items-center'>
				<div className='mr-4'>
					<Button label='Normal Button' />
				</div>
				<div className='mr-4'>
					<Button label='Disabled Button' disabled={true} />
				</div>
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
