// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
  // render() {
    // return (
      // <div className="App">
        // <header className="App-header">
          // <img src={logo} className="App-logo" alt="logo" />
          // <h1 className="App-title">Welcome to React</h1>
        // </header>
        // <p className="App-intro">
          // To get started, edit <code>src/App.js</code> and save to reload.
        // </p>
      // </div>
    // );
  // }
// }

// export default App;
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {crimes: []}

  componentDidMount() {
    fetch('/crimes')
      .then(res => res.json())
      .then(crimes => this.setState({ crimes }));
  }

  render() {
    return (
      <div className="App">
        <h1>Crimes</h1>
		 {this.state.crimes.map(crime =>
          <div key={crime._id}>{crime.crimedate + ' ' + crime.description + ' ' + crime.weapon + ' ' + crime.district + ' ' + crime.threatlevel}</div>
        )}
	  </div>
    );
  }
}

export default App;