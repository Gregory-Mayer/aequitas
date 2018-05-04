import React, { Component } from 'react';

// Contains information about filters
export default class Footer extends Component {
  render() {
    return (
			<div className="footer">
				<div>
				<h4>Filters Applied:</h4>
				Inside, Larceny
				</div>
				<div>
				<h4>Number of Results:</h4>
				205
				</div>
			</div>
    );
  }
};
