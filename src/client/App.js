import React, {Component} from 'react'
import {renderRoutes} from 'react-router-config'
import Header from './components/Header'

class App extends Component {
	render() {
		return (
			<div className='container-fluid'>
				<div className="row">
					<Header/>
					{renderRoutes(this.props.route.routes)}
				</div>
			</div>
		)
	}
}

export default {
	component: App
}