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

	updateData(newURL, filters) {
		fetch(newURL,{method: "POST", body: filters})
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
