import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import SliderContainer from './components/SliderContainer';
import Footer from './components/Footer.js';
import Sidebar from './components/Sidebar.js';
import Main from './components/Main.js'

const baseURL = "https://data.baltimorecity.gov/resource/4ih5-d5d5.json?$limit=5000";

// Bundles separate components for the app
export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoaded: false,
			data: [],
			// Filters
			filters: {
				weapon: [],
      	description: [],
      	district: [],
      	insideOutside: []
			}
		};
	}

	updateData(newURL) {
		fetch(newURL)
			.then(res => res.json())
			.then(
				(result) => {
					this.setState({
						isLoaded: true,
						data: result
					});
				}
			)
	}

	componentDidMount() {
		this.updateData(baseURL);
	}

	filterCallback = (newFilters) => {
		this.setState({filters: newFilters});

		var url = baseURL;
		var weapon = this.state.filters.weapon;
		var description = this.state.filters.description;
		var district = this.state.filters.district;
		var insideOutside = this.state.filters.insideOutside;
		// Add weapon filters to url
		if (weapon.length > 0) {
			for (let i = 0; i < weapon.length; i++) {
				console.log("updating weapon filter")
				url = url + "&weapon=" + weapon[i];
			}
		}
		// Add description filters to url
		if (description.length > 0) {
			for (let i = 0; i < description.length; i++) {
				console.log("updating description filter")
				url = url + "&description=" + description[i];
			}
		}
		// Add district filters to url
		if (district.length > 0) {
			for (let i = 0; i < district.length; i++) {
				console.log("updating distric filter")
				url = url + "&district=" + district[i];
			}
		}
		// Add insideOutside filters to url
		if (insideOutside.length > 0) {
			for (let i = 0; i < insideOutside.length; i++) {
				console.log("updating insideOutside filter")
				url = url + "&inside_outside=" + insideOutside[i];
			}
		}
		console.log(url);
		this.updateData(url);
	}


	render(props) {
		const { isLoaded, data } = this.state;
		if (!isLoaded) {
			return <div>Loading...</div>
		} else {
			return (
				<div className="App">
					<Header />
		      <SliderContainer />
					<Sidebar filterCallback={ this.filterCallback }/>
					<Main data={ data }/>
				</div>
			);
		}
	}
}
