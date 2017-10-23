import React, { Component } from 'react';

class AudioPlayer extends Component {

    constructor(props) {
        super(props);

        this.audioStream = new Audio();
        this.audioStream.src = 'Ahrix - Courage.mp3';
        this.audioStream.play();

        this.renderAudio = this.renderAudio.bind(this);

        this.prepareFreqData();
    }

    prepareFreqData() {

        let ctx = new AudioContext();
        this.analyser = ctx.createAnalyser();
        this.analyser.smoothingTimeConstant = 0.8;
        this.source = ctx.createMediaElementSource(this.audioStream);
        this.source.connect(this.analyser);
        this.analyser.connect(ctx.destination);

        this.frequencyData = new Uint8Array(this.analyser.frequencyBinCount);
        this.renderAudio();
    }

    renderAudio() {
        requestAnimationFrame(this.renderAudio);
        this.analyser.getByteFrequencyData(this.frequencyData);

        this.props.onAudioFreqDataChange(this.frequencyData);
    }

    render() {

        return (
            <div>
            </div>
        );
    }
}

export default AudioPlayer;