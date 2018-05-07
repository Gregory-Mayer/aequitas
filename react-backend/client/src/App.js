import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import SliderContainer from './components/SliderContainer';
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
			dates: [],
			dateValues: {
				minDate: null,
				maxDate: null,
				minTime: null,
				maxTime: null,
			}
		};

		this.updateData(baseURL);
	}

	updateData(newURL, filters) {
		var filterObject = {
			date: {
				start: null,
				end: null
			},
			time: {
				start: this.state.dateValues.minTime,
				end: this.state.dateValues.maxTime
			},
			weapon: this.state.filters.weapon,
			description: this.state.filters.weapon,
			district: this.state.filters.district,
			inside_outside: this.state.filters.inside_outside,
			threatLevel: this.state.filters.threatLevel
		}

		if (this.state.dateValues.minDate) {
			filterObject.date.start = this.state.dates[this.state.dateValues.minDate];
			filterObject.date.end = this.state.dates[this.state.dateValues.maxDate]
		}

		fetch(newURL,{method: "POST", body: filterObject})
			.then(res => res.json())
			.then(
				(result) => {
					this.setState({
						//isLoaded: true,
						data: result
					});
				}
			)
	}

	componentDidUpdate() {
		console.log("Updated, displaying state:")
		console.log(this.state);
		
		// Update dates if it hasn't been updated yet
		if ((!this.state.isLoaded) && (this.state.dates.length === 0)) {
			var data = this.state.data;
	    var dates = [];
	    for (let i = 0; i < data.length; i++) {
	      if (!dates.includes(data[i].crimedate)) {
	        dates.push(data[i].crimedate);
	      }
	    }
	    this.setState({
				dates: dates.sort(),
				isLoaded: true
			});
			console.log("Loaded dates:", this.state.dates)
		}

	}

	componentDidMount() {
		//this.updateData(baseURL);
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
		      <SliderContainer sliderCallback={ this.sliderCallback } dates={ this.state.dates }/>
					<Sidebar filterCallback={ this.filterCallback }/>
					<Main data={ data }/>
				</div>
			);
		}
	}
}
