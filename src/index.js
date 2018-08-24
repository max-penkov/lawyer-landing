// Start up point for client side app
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {renderRoutes} from 'react-router-config';
import Routes from '../src/client/Routes'

ReactDOM.hydrate(
	<BrowserRouter>
		<div>{renderRoutes(Routes)}</div>
	</BrowserRouter>
	, document.querySelector('#root'));

