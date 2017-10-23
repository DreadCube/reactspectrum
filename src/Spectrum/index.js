import React, { Component } from 'react';
import Bars from './Modes/Bars/';

class Spectrum extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return <Bars audioFreqData={this.props.data.audioFreqData} data={this.props.data.modes['Bars']}></Bars>;
    }
}

export default Spectrum;