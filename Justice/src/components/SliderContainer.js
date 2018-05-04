import React, { Component } from 'react';
//import RangeSlider from 'react-dual-rangeslider';
import { Range, createSliderWithTooltip } from 'rc-slider';
import 'rc-slider/assets/index.css';

const RangeWithTooltip = createSliderWithTooltip(Range);

// Contains the sliders for filtering date and time
export default class SliderContainer extends Component {
  constructor(props) {
		super(props);
		this.state = {
      minDate: 0,
      maxDate: 100,
      minTime: 0,
      maxTime: 48
    }
	};
  updateTime = (value) => {
    this.state.minTime = value[0];
    this.state.maxTime = value[1];
    this.props.sliderCallback(this.state);
  }
  updateDate = (value) => {
    this.state.minDate = value[0];
    this.state.maxDate = value[1];
    this.props.sliderCallback(this.state);
  }
  render() {
    return (
			<div className="sliderContainer">
        <div className="dateContainer">
          Date : {this.state.minDate} - {this.state.maxDate}
          <RangeWithTooltip className="dateRange"
            min={0}
            max={100}
            defaultValue={[0,100]}
            pushable={1}
            onAfterChange={this.updateDate}
          />
        </div>
        <div className="timeContainer">
          Time (hours): {this.state.minTime} - {this.state.maxTime}
          <RangeWithTooltip className="timeRange"
            min={0}
            max={48}
            defaultValue={[0,48]}
            pushable={1}
            onAfterChange={this.updateTime}
          />
        </div>
			</div>
    );
  }
};
