import React, {Component} from 'react'
import {renderRoutes} from 'react-router-config'
import Header from './components/Header'
import Footer from './components/Footer'

class App extends Component {
	render() {
		return (
			<div>
				<Header/>
				{renderRoutes(this.props.route.routes)}
				<Footer/>
			</div>
		)
	}
}

export default {
	component: App
}