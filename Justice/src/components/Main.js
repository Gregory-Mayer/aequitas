import React, { Component } from 'react';
import Map from './Map.js';
import TableContainer from './TableContainer';
import './Main.css';

// Contains the layout for the app
export default class Main extends Component {
  render() {
    return (
			<div className="main">
				<Map data = { this.props.data }/>
        <TableContainer data = { this.props.data }/>
			</div>
    );
  }
};
