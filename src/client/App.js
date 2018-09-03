import React, {Component} from 'react'
import {renderRoutes} from 'react-router-config'
import Header from './components/Header'
import Footer from './components/Footer'
import {faSpinner, faBalanceScale, faChevronDown, faGraduationCap, faPhone, faBusinessTime, faDollarSign} from '@fortawesome/free-solid-svg-icons'
import {library} from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'
library.add(fab, faSpinner, faBalanceScale, faChevronDown, faGraduationCap, faPhone, faBusinessTime,faDollarSign);

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