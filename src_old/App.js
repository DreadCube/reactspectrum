import React, { Component } from 'react';
import Spectrum from './Spectrum';
import UserInterface from './UserInterface';
import AudioPlayer from './AudioPlayer';
import logo from './logo.svg';
import configuration from './configuration.json';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ['modes']: configuration,
            ['active']: 'Bars',
            ['audioFreqData']: null
        }

        this.handleAudioFreqDataChange = this.handleAudioFreqDataChange.bind(this);
        this.handleDataChange = this.handleDataChange.bind(this);
        this.handleModeChange = this.handleModeChange.bind(this);
    }

    render() {
    	const state = this.state
        return (
            <div>
                <AudioPlayer onAudioFreqDataChange={this.handleAudioFreqDataChange} data={this.state} />
                <UserInterface onChange={this.handleDataChange} onModeChange={this.handleModeChange} data={this.state} />
                <Spectrum data={state} />
            </div>
        );
    }

    handleAudioFreqDataChange(value) {
        let data = this.state;
        data.audioFreqData = value;
        this.setState(data);
    }

    handleModeChange(value) {
        let data = this.state;
        data.active = value;
        this.setState(data);
    }

    handleDataChange(id, value) {
        let data = this.state;
        data['modes'][data.active][id].value = value;

        this.setState(data);
    }
}

export default App;
