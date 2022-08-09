import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ReactMaterial } from './lib';

const root = ReactDOM.createRoot(document.getElementById('root'));

const reactMaterialConfig = {
	palette: {
		primary: '#386a20',
		secondary: '#55624c',
		tertiary: '#19686a',
		neutral: '#5d5f5a',
		error: '#b3261e',
	}
}

root.render(
	<React.StrictMode>
		<ReactMaterial config={reactMaterialConfig}>
			<App />
		</ReactMaterial>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
