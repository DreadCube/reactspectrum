import React, { Component } from 'react';

class CheckBox extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onChange(this.props.id, e.target.checked);
    }

	render() {
	    return (
	    	<input type="checkbox"
                   id={this.props.id}
                   checked={this.props.value}
                   onChange={this.handleChange} />
		);
    }
}

export default CheckBox;