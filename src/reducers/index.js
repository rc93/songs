import {combineReducers} from 'redux';
import songList from './songList';
import selectedSong from './selectedSong';

export default combineReducers({
   songReducer:songList,
   songDetail: selectedSong
})