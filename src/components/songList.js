import React, { Component } from 'react';
import {getSongList, getSelectedSong} from '../actions'
import {connect} from 'react-redux'
import { List, Button } from 'semantic-ui-react'
import { Grid, Segment } from 'semantic-ui-react'

class songList extends Component {
    constructor(props)
    {
        super(props)
        props.getSongList()
    }
    getListofSongs = () =>{
        return this.props && this.props.songList && this.props.songList.length > 0 ? this.props.songList.map((song,index)=>{
            return (
                <List.Item key={index}>
                     <Grid stackable columns={2}>
                            <Grid.Column>
                                <Segment>
                                    {song.title}
                                </Segment>
                            </Grid.Column>
                    <Grid.Column>
                        <Button 
                                primary
                                onClick={()=>{
                                    this.props.getSelectedSong(song.title)}
                                }
                            >
                                Select
                        </Button>
                    </Grid.Column> 
                    </Grid> 
                </List.Item>
                )
        }) : []
    }
    render() {
        return (
            <List>
                {this.getListofSongs()}
            </List>
        );
    }
}

const mapStateToProps = (state) =>{
    return {
        songList:state.songReducer.songList,
    }
}

export default connect(mapStateToProps,{getSongList,getSelectedSong})(songList);