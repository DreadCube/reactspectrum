import React, { Component } from 'react';
import Bars from './Modes/Bars/';

class Spectrum extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <Bars data={this.props.data.modes['Bars']}></Bars>;
    }
}

export default Spectrum;