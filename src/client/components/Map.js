import React, {Component} from 'react';
import {YMaps, Map, Placemark} from 'react-yandex-maps';

const mapState = {center: [55.76, 37.64], zoom: 13};

class MapBasics extends React.Component {
	constructor(props) {
		super();
		this.state = {
			showMap: true
		}
	}

	toggleMap() {
		const {showMap} = this.state;
		this.setState({showMap: !showMap});
	}

	render() {
		const {showMap} = this.state;

		return (
			<div>
				<h2>
					{this.props.Heading}
				</h2>
				<YMaps>
					<Map width="100%" height="450px" state={mapState}>
						<Placemark
							geometry={{
								coordinates: [55.751574, 37.573856]
							}}
							properties={{
								hintContent: 'офиис',
								balloonContent: 'Координта и телефон'
							}}
							// options={{
							// 	iconLayout: 'default#image',
							// 	iconImageHref: 'images/myIcon.gif',
							// 	iconImageSize: [30, 42],
							// 	iconImageOffset: [-3, -42]
							// }}
						/>
					</Map>
				</YMaps>
			</div>
		);
	}
}

export default MapBasics;