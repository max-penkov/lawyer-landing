import React, {Component} from 'react'
import {renderRoutes} from 'react-router-config'
import Header from './components/Header'

class App extends Component {
	render() {
		return (
			<div className='container-fluid'>
				<Header/>
			</div>
		)
	}
}

export default {
	component: App
}