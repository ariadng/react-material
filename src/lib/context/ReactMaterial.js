import ReactMaterialContext from './ReactMaterialContext';
import generateState from './generateState';

const ReactMaterial = ({ config, children }) => {

	const state = generateState(config);
	console.log(state);

	return (
		<ReactMaterialContext.Provider value={state}>
			{children}
		</ReactMaterialContext.Provider>
	);

}
export default ReactMaterial;