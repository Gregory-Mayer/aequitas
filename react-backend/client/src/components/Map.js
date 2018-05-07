/* global google */
import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';
import HeatmapLayer from "react-google-maps/lib/components/visualization/HeatmapLayer";

var mapStyle = {
	height: '100%',
	width: '100%'
}

// Contains the map
export default class Map extends Component {
	constructor(props) {
		super(props);
		this.state = {
			heatMapData: []
		};
	}

	componentDidUpdate() {
		var data = this.props.data;
		for(var i = 0; i < data.length; i++) {
			if (data[i].latitude != null) {
				var lat = data[i].latitude;
				var lng = data[i].longitude;
				this.state.heatMapData.push(new google.maps.LatLng(lat, lng))
			}
		}
		// console.log(this.state.heatMapData);
	}

	render(){
		// console.log(this.state.heatMapData);
		const GoogleMapExample = withGoogleMap(props => (
			<GoogleMap
				defaultCenter = { { lat: 39.2904, lng: -76.6122 } }
				defaultZoom = { 11 }
			>
				<HeatmapLayer
					data = { this.state.heatMapData }
				/>
			</GoogleMap>
		));
		return(
			<div>
				<GoogleMapExample className="map"
					containerElement={ <div style={mapStyle} /> }
					mapElement={ <div style={{ height: '100%' }} /> }
				/>
			</div>
		);
	}
};
