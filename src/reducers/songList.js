const initialState = {
    songList:[]
}
const songs = (state=initialState, action) =>{
    switch(action.type)
    {
        case "SONG_LIST":
            return {...state, songList:action.payload}
        default:
            return {...state}
    } 
}
export default songs