import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

// Contains the table
export default class TableContainer extends Component {
  render() {
    const columns = [{
      Header: 'Weapon',
      accessor: 'weapon',
    }, {
      Header: 'Code',
      accessor: 'crimecode'
    }, {
      Header: 'Crime Type',
      accessor: 'description'
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
      Header: 'Post',
      accessor: 'post'
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
