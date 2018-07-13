import React, { Component } from 'react';
import AudioSpectrum from 'react-audio-spectrum'

class Spectrum extends Component {

    constructor(props) {
        super(props)
    }



    render() {
    	return <div>
    				<AudioSpectrum />
    			</div>
    }
}

export default Spectrum;