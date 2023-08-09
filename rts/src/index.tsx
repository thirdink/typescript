import React from 'react';
import ReactDOM from 'react-dom/client';
// import GuestList from './state/GuestList';
// import EventComponent from './events/EventComponent';
import UserSearch from './refs/UserSearch';

// 2) Get a reference to the div with ID root
const el = document.getElementById('root');

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el!);

root.render(
	<React.StrictMode>
		<UserSearch />
	</React.StrictMode>
);
