import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

// Contains the table
export default class TableContainer extends Component {
  render() {
    const columns = [{
      Header: 'Crime type',
      accessor: 'description'
    }, {
      Header: 'Weapon',
      accessor: 'weapon',
    }, {
      Header: 'Time',
      accessor: 'crimetime'
    }, {
      Header: 'Date',
      accessor: 'crimedate'
    }, {
      Header: 'District',
      accessor: 'district'
    }, {
      Header: 'Inside/Outside',
      accessor: 'inside_outside'
    }, {
      Header: 'Threat level',
      accessor: 'threatlevel'
    }]
    return (
			<div className="tableContainer">
        <ReactTable
          data={ this.props.data }
          columns={columns}
          defaultPageSize={5}
        />
			</div>
    );
  }
};
