import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import SliderContainer from './components/SliderContainer';
import Footer from './components/Footer.js';
import Sidebar from './components/Sidebar.js';
import Main from './components/Main.js'

//const baseURL = "https://data.baltimorecity.gov/resource/4ih5-d5d5.json?$limit=5000";
const baseURL = "/crimes";

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
      	inside_outside: []
			},
			dateValues: {
				minDate: 0,
				maxDate: 100,
				minTime: 0,
				maxTime: 48,
				dates: []
			}
		};
	}

	updateData(newURL) {
		fetch(newURL, {method: "POST"})
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

	componentDidUpdate() {
		console.log("Updated, displaying state:")
		console.log(this.state);
	}

	componentDidMount() {
		this.updateData(baseURL);
	}

	sliderCallback = (newSliderValues) => {
		this.setState({
			dateValues: newSliderValues
		});
	}

	filterCallback = (newFilters) => {
		this.setState({
			filters: newFilters
		});

		var url = baseURL;
		var weapon = this.state.filters.weapon;
		var description = this.state.filters.description;
		var district = this.state.filters.district;
		var inside_outside = this.state.filters.inside_outside;
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
		// Add inside_outside filters to url
		if (inside_outside.length > 0) {
			for (let i = 0; i < inside_outside.length; i++) {
				console.log("updating inside_outside filter")
				url = url + "&inside_outside=" + inside_outside[i];
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
		      <SliderContainer sliderCallback={ this.sliderCallback } data={ data }/>
					<Sidebar filterCallback={ this.filterCallback }/>
					<Main data={ data }/>
				</div>
			);
		}
	}
}
