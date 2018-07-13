import React, { Component } from 'react';

class Range extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onChange(this.props.id, e.target.value);
    }

	render() {
	    return (
	    	<input type="range"
                   id={this.props.id}
                   min={this.props.min}
                   max={this.props.max}
                   value={this.props.value}
                   onChange={this.handleChange} />
		);
    }
}

export default Range;