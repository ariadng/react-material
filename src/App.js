import { ElevatedButton, FilledButton, FilledTonalButton, IconButton, OutlinedButton } from "./lib/components/Button";
import { Icon } from "./lib/components/Icon";

function App() {
	return (
		<div className="p-[50px]">

			<div className='mb-[50px]'>
				<div className='font-semibold text-xl mb-6 pl-4 text-teal-800 border-l-4 border-teal-800'>Icons</div>
				<div className='flex items-center'>
					<Icon name='arrow_forward' />
					<Icon name='arrow_forward' size='large' />
				</div>
			</div>

			<div className='mb-[50px]'>
				<div className='font-semibold text-xl mb-6 pl-4 text-teal-800 border-l-4 border-teal-800'>Buttons</div>
				<div className='flex items-center'>
					<ElevatedButton label='Elevated Button' marginRight={1} />
					<FilledButton label='Filled Button' marginRight={1} />
					<FilledTonalButton label='Filled Tonal Button' marginRight={1} />
					<OutlinedButton label='Outlined Button' marginRight={1} />
					<IconButton icon='arrow_forward' />
				</div>
			</div>
		</div>
	);
}

export default App;
