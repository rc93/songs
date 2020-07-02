const initialState = {
    selectedSong:{}
}
const selectedSong = (state=initialState, action) =>{
    switch(action.type)
    {
        case "SELECTED_SONG":
            return {...state, selectedSong:action.payload}
        default:
            return {...state}
    }
}
export default selectedSong