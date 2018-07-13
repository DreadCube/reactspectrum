import React, { Component } from 'react'
import Avatar from 'react-toolbox/lib/avatar/Avatar'
import {Card, CardTitle, CardActions} from 'react-toolbox/lib/card'
import Button from 'react-toolbox/lib/button/Button'
import Drawer from 'react-toolbox/lib/drawer/Drawer'
import {Tabs, Tab} from 'react-toolbox/lib/tabs'
import Input from 'react-toolbox/lib/input'
import Soundcloud from 'react-icons/lib/fa/soundcloud'
import Youtube from 'react-icons/lib/fa/youtube'
import Spectrum from '../Spectrum'
import Providers from '../providers'
import './index.css'

class UI extends Component {

    constructor(props) {
        super(props)

        this.handleSearch = this.handleSearch.bind(this)
        this.handlePlay = this.handlePlay.bind(this)

        this.state = {
            active: false,
            index: 1,
            audioModules: Providers,
            searchedTracks: []
        }
    }

    componentWillMount() {
        document.addEventListener('keydown', this.handleKeyDown.bind(this))
    }

    handleKeyDown = (event) => {
        if(event.code === 'Space') {
            this.handleToggle()
        }
    }

    handleToggle = () => {
        this.setState({
            active: !this.state.active
        })
    }

    handleTabChange = (index) => {
        this.setState({index})
    }


    handleSearch(provider, searchValue) {
        provider.search(searchValue)
            .then(searchedTracks => {
                this.setState({
                    searchedTracks
                })
            })
    }

    handlePlay(provider, trackId) {
        provider.getPlaybackSource(trackId)
    }

    render() {
        const {audioModules, searchedTracks} = this.state

        return (
            <div>
                <div className="left">
                    <Drawer class="" active={this.state.active} type="left">
                        <h1>Audio</h1>
                        <Tabs index={this.state.index} onChange={this.handleTabChange}>
                        {
                            audioModules.map((item, index) => {
                                return (
                                    <Tab label={item.label}>
                                        {item.connect && <Button onClick={(event) => item.connect()}>Connect</Button>}
                                        <Input type="text" onChange={(result) => this.handleSearch(item, result)} placeholder="search for videos!" />
                                    
                                        {
                                            searchedTracks.map((track, index) => {
                                                return (
                                                    <Card className="searchedTracks">
                                                        <CardTitle
                                                            avatar={track.thumbnail}
                                                            subtitle={track.title}
                                                        />
                                                        <CardActions>
                                                            <Button label="play" onClick={(event) => this.handlePlay(item, track.id)}/>
                                                        </CardActions>
                                                    </Card>
                                                )
                                            })
                                        }
                                    </Tab>
                                )
                            })
                        }
                        </Tabs>
                    </Drawer>
                </div>
                    <Drawer className="drawerRight" active={this.state.active} type="right">
                        <Tabs index={0}>
                            <Tab label="Spectrum">
                                <Spectrum />
                            </Tab>
                            <Tab label="Boombox">
                            </Tab>
                        </Tabs>
                    </Drawer>
            </div>
        );
    }
}

export default UI
