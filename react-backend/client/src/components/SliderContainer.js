import React, { Component } from 'react';
//import RangeSlider from 'react-dual-rangeslider';
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

// Contains the sliders for filtering date and time
export default class SliderContainer extends Component {
  constructor(props) {
  	super(props);
		this.state = {
      minDate: 0,
      maxDate: this.props.dates.length - 1,
      minTime: 0,
      maxTime: 24,
      dates: this.props.dates
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
    //this.sendSliderData();
  }

  render() {
    return (
			<div className="sliderContainer">
        <div className="dateContainer">
          Date: {this.state.dates[this.state.minDate]} - {this.state.dates[this.state.maxDate]}
          <Range className="dateRange"
            min={0}
            max={this.state.dates.length - 1}
            defaultValue={[this.state.minDate, this.state.maxDate]}
            pushable={1}
            onChange={this.updateDate}
            onAfterChange={this.sendSliderData}
          />
        </div>
        <div className="timeContainer">
          Time (hours): {this.state.minTime} - {this.state.maxTime}
          <Range className="timeRange"
            min={0}
            max={24}
            defaultValue={[0,24]}
            pushable={1}
            onChange={this.updateTime}
            onAfterChange={this.sendSliderData}
          />
        </div>
			</div>
    );
  }
};
