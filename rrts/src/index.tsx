import thunk from 'redux-thunk';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { App } from './components/App';
import { reducers } from './reducers';

const store = createStore(reducers, applyMiddleware(thunk));
const el = document.getElementById('root');
const root = ReactDOM.createRoot(el!);

root.render(
	<Provider store={store}>
		<App />
	</Provider>
);
