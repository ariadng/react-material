import { ElevatedButton, FilledButton, FilledTonalButton, OutlinedButton } from "./lib/components/Button";

function App() {
	return (
		<div className="p-[50px]">
			<div>
				<div className='font-semibold text-xl mb-6 pl-4 text-teal-800 border-l-4 border-teal-800'>Buttons</div>
				<ElevatedButton label='Elevated Button' marginRight={1} />
				<FilledButton label='Filled Button' marginRight={1} />
				<FilledTonalButton label='Filled Tonal Button' marginRight={1} />
				<OutlinedButton label='Outlined Button' />
			</div>
		</div>
	);
}

export default App;
