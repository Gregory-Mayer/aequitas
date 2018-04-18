import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class TitleBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'blah'
        }

        this.updateName = this.updateName.bind(this)
    }
    updateName(e) {
        this.setState({
            name: e.target.value
        })
    }
    render() {
        return (
            <div>
                <div id="titleBar">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <a class="navbar-brand" href="#">JUSTICE</a>
                        </div>
                        <ul class="nav navbar-nav">
                            <li><a href="#">Map VIEW</a></li>
                            <li><a href="#">Graph View</a></li>
                            <li><a href="#">Table View</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            /*<div>
                <h1>Your name is {this.state.name}</h1>
                Change name:
                    <input
                    type="text"
                    value={this.state.name}
                    onChange={this.updateName}
                />
            </div>*/
        )
    }
}

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    render() {
        return (
            <TitleBar />
        );
    }
}

export default App;
