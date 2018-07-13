import React, { Component } from 'react'

import './assets/react-toolbox/theme.css'
import theme from './assets/react-toolbox/theme.js'
import ThemeProvider from 'react-toolbox/lib/ThemeProvider'

import UI from './UI'


class App extends Component {

    constructor(props) {
        super(props)
    }

    render() {
    	const state = this.state
        return (
            <ThemeProvider theme={theme}>
                <div className="App">
                    <UI />
                </div>
            </ThemeProvider>
        );
    }
}

export default App
