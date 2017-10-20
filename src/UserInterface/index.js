import React, { Component } from 'react';
import Range from './Range';
import ColorPicker from './ColorPicker';
import CheckBox from './CheckBox';

class UserInterface extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(data, value) {
        this.props.onChange(data, value);
    }

    render() {

    	let data = this.props.data;
    	let inputs = Object.keys(data).map(function(key) {


    		switch(data[key].type) {
    			case 'range':
    				return <Range id={key}
    							  key={key}
    							  min={data[key].min}
    							  max={data[key].max}
    							  value={data[key].value}
    							  onChange={this.handleChange}
    						/>
    			break;
    			
    			case 'color':
    				return <ColorPicker id={key}
    									key={key}
    									value={data[key].value}
    									onChange={this.handleChange}
    						/>
    			break;

    			case 'checkbox':
    				return <CheckBox id={key}
    							     key={key}
    								 value={data[key].value}
    								 onChange={this.handleChange}
    						/>
    			break;
    			default:
    				return <h1>Test2</h1>;
    			break;
    		}

    			
    	}.bind(this))

    	return inputs;

    }
}

export default UserInterface;