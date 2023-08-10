import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
// 2) Get a reference to the div with ID root
const el = document.getElementById('root');

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el!);
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
