import React, { Component } from 'react';
import Spectrum from './Spectrum';
import UserInterface from './UserInterface';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
        	data: {
        		['MeineId'] : {
					"type": "range",
					"min": 0,
					"max": 100,
					"value": 10
        		},
        		['Farbe'] : {
					"type": "color",
					"value": 'green'
        		},
        		['Checkbox'] : {
					"type": "checkbox",
					"value": true
        		},
        		['Checkbox2'] : {
					"type": "checkbox",
					"value": false
        		}
        	}
        }

        this.handleDataChange = this.handleDataChange.bind(this);
    }

    render() {
        return (
            <div>
                <Spectrum data={this.state.data} />
                <UserInterface onChange={this.handleDataChange} data={this.state.data} />
            </div>
        );
    }

    handleDataChange(id, value) {

    	const data = this.state.data;
    	data[id].value = value;
    	this.setState(data);
    }
}

export default App;
