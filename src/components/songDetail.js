import React, { Component } from 'react';
import {connect} from 'react-redux'

class songDetail extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            songDetail:{}
        }
    }
    componentWillReceiveProps(nextProps)
    {
        if(this.props.songDetail !== nextProps.songDetail)
        {
            this.setState({songDetail: nextProps.songDetail})
        }
    }
    render() {
        const {songDetail} = this.state
        let detail = "Please select a song";
       if(songDetail && Object.keys(songDetail).length > 0)
        {
           detail = <div>
                Song Title: {songDetail.title}
                <br/>
                Song Duration: {songDetail.duration}
            </div>
        }
        return (
           detail      
        );
    }
}
const mapStateToProps = (state) =>{
    return {
        songDetail: state.songDetail.selectedSong
    }
}
export default connect(mapStateToProps,null)(songDetail);