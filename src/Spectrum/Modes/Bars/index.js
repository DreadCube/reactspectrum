import React, { Component } from 'react';
import './index.css';

class Bars extends Component {

    constructor(props) {
    	super(props)
        this.state = {
        	data: props
        }
    }

    render() {
        return (
            <canvas></canvas>
        );
    }
}

export default Bars;