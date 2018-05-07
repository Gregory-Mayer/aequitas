import React, { Component } from 'react';
//import RangeSlider from 'react-dual-rangeslider';
import { Range, createSliderWithTooltip } from 'rc-slider';
import 'rc-slider/assets/index.css';

const RangeWithTooltip = createSliderWithTooltip(Range);

// Contains the sliders for filtering date and time
export default class SliderContainer extends Component {
  constructor(props) {
  	super(props);

    var data = this.props.data;
    var dates = [];
    for (let i = 0; i < data.length; i++) {
      if (!dates.includes(data[i].crimedate)) {
        dates.push(data[i].crimedate);
      }
    }

    console.log(dates);

		this.state = {
      minDate: 0,
      maxDate: dates.length,
      minTime: 0,
      maxTime: 48,
      dates: dates.sort()
    }
	};
  updateTime = (value) => {
    this.setState({minTime: value[0]});
    this.setState({maxTime: value[1]});
    this.forceUpdate();
  }
  updateDate = (value) => {
    this.setState({minDate: value[0]});
    this.setState({maxDate: value[1]});
    this.forceUpdate();
  }

  sendSliderData = () => {
    this.props.sliderCallback(this.state);
  }

  componentDidMount() {
    this.sendSliderData();
  }

  render() {
    return (
			<div className="sliderContainer">
        <div className="dateContainer">
          Date : {this.state.dates[this.state.minDate]} - {this.state.dates[this.state.maxDate - 1]}
          <Range className="dateRange"
            min={0}
            max={this.state.dates.length - 1}
            defaultValue={[0,this.state.dates.length - 1]}
            pushable={1}
            onChange={this.updateDate}
            onAfterChange={this.sendSliderData}
          />
        </div>
        <div className="timeContainer">
          Time (hours): {this.state.minTime} - {this.state.maxTime}
          <Range className="timeRange"
            min={0}
            max={48}
            defaultValue={[0,48]}
            pushable={1}
            onChange={this.updateTime}
            onAfterChange={this.sendSliderData}
          />
        </div>
			</div>
    );
  }
};
