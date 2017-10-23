import React, { Component } from 'react';
import Spectrum from './Spectrum';
import UserInterface from './UserInterface';
import logo from './logo.svg';
import configuration from './configuration.json';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ['modes']: configuration,
            ['active']: 'Bars'
        }

        this.handleDataChange = this.handleDataChange.bind(this);
        this.handleModeChange = this.handleModeChange.bind(this);
    }

    render() {
        return (
            <div>
                <Spectrum data={this.state} />
                <UserInterface onChange={this.handleDataChange} onModeChange={this.handleModeChange} data={this.state} />
            </div>
        );
    }

    handleModeChange(value) {
        const data = this.state;
        data.active = value;
        this.setState(data);
    }

    handleDataChange(id, value) {

    	const data = this.state;
    	data['modes'][data.active][id].value = value;
    	this.setState(data);
    }
}

export default App;
