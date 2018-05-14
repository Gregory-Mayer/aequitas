import React, { Component } from 'react';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';

// Contains the buttons for different views
export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      isShowingContact: false,
      isShowingHelp: false
    }
  }

  openHelpDialog = () => {
    this.setState({isShowingHelp: true});
  }
  handleHelpClose = () => {
    this.setState({isShowingHelp: false});
  }

  openContactDialog = () => {
    this.setState({isShowingContact: true});
  }
  handleContactClose = () => {
    this.setState({isShowingContact: false});
  }

  render() {
    return (
			<div className="header">
        <div>
				  <h2>JUSTICE</h2>
        </div>
        <div>
          <button style={{float: 'right'}} onClick={ this.openHelpDialog }>Help</button>
          <button style={{float: 'right'}} onClick={ this.openContactDialog }>Contact Us</button>
        </div>
        {
        this.state.isShowingHelp &&
        <ModalContainer onClose={this.handleHelpClose}>
          <ModalDialog onClose={this.handleHelpClose}>
            <h1>Help</h1>
            <ul>
              <li>Use the filters on the sidebar to filter the type of data you wish to view</li>
              <li>Use the date and time sliders to select the time range for the data you wish to view</li>
              <li>Click on the headers of the table in order to sort by the values in that column</li>
              <li>Drag the borders of table headers to resize the column widths</li>
            </ul>
          </ModalDialog>
        </ModalContainer>
        }
        {
        this.state.isShowingContact &&
        <ModalContainer onClose={this.handleContactClose}>
          <ModalDialog onClose={this.handleContactClose}>
            <h1>Contact Us</h1>
            Please feel free to contact us with any questions regarding our application<br/>
            <ul>
              <li>Nick Sorauf: nsorauf1@umbc.edu</li>
              <li>Andrew McLamb: andrew56@umbc.edu</li>
              <li>Arjun Saini: ix56539@umbc.edu</li>
              <li>Gregory Mayer: gmayer1@umbc.edu</li>
            </ul>
          </ModalDialog>
        </ModalContainer>
        }
			</div>
    );
  }
};
