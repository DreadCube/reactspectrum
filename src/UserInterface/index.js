import React, { Component } from 'react';
import Range from './Range';
import ColorPicker from './ColorPicker';
import CheckBox from './CheckBox';
import './index.css';

class UserInterface extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleModeChange = this.handleModeChange.bind(this);
    }

    handleChange(data, value) {
        this.props.onChange(data, value);
    }

    handleModeChange(event) {
        this.props.onModeChange(event.target.value);
    }

    render() {

        let active = this.props.data.active;
        let modes = this.props.data.modes;
    	let data = modes[active];
    	let inputs = Object.keys(data).map(function(key) {

    		switch(data[key].type) {
    			case 'range':
    				return <div>
    							<label htmlFor={key}>{data[key].label}</label>
	    						<Range id={key}
	    							  key={key}
	    							  min={data[key].min}
	    							  max={data[key].max}
	    							  value={data[key].value}
	    							  onChange={this.handleChange} />
	    					</div>
    			break;
    			
    			case 'color':
    				return <div>
    							<label htmlFor={key}>{data[key].label}</label>
	    						<ColorPicker id={key}
	    									key={key}
	    									value={data[key].value}
	    									onChange={this.handleChange} />
	    					</div>
    			break;

    			case 'checkbox':
    				return <div>
    							<label htmlFor={key}>{data[key].label}</label>
	    						<CheckBox id={key}
	    							     key={key}
	    								 value={data[key].value}
	    								 onChange={this.handleChange} />
    						</div>
    			break;
    		}
    	}.bind(this))


        let modesOpt = Object.keys(modes).map(function(key) {
            return <option value={key}>{key}</option>
        });

    	return <div className="userInterface">
            <label htmlFor="">Mode</label>
            <select id="userInterfaceMode" value={active} onChange={this.handleModeChange}>
                {modesOpt}
            </select>
            {inputs}
        </div>;

    }
}

export default UserInterface;