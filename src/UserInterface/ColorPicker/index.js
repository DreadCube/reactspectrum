import React, { Component } from 'react';
import { SketchPicker } from 'react-color';

class ColorPicker extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onChange(this.props.id, e.hex);
    }

    render() {
        return (
            <SketchPicker id={this.props.id}
                          color={this.props.value}
                          onChange={this.handleChange} />
        );
    }
}

export default ColorPicker;