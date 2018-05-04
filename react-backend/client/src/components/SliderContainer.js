import React, { Component } from 'react';
import RangeSlider from 'react-dual-rangeslider';
import Slider, { Range } from 'rc-slider';
import Tooltip from 'rc-tooltip';
import 'rc-slider/assets/index.css';

// Contains the sliders for filtering date and time
export default class SliderContainer extends Component {
  render() {
    return (
			<div className="sliderContainer">
        <div className="dateContainer">
          Date
          <Range className="dateRange"
            min={0}
            max={100}
            minRange={1}
            label
          />
        </div>
        <div className="timeContainer">
          Time
          <Range className="timeRange"
            min={0}
            max={48}
            minRange={1}
            maxRange={24}
          />
        </div>
			</div>
    );
  }
};
