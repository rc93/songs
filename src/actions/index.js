const songList = [
        {title:"Nazar K Samne", duration:"2m 10s"},
        {title:"Ek Ladki ko Dekha", duration:"4m 50s"},
        {title:"Tum hi ho", duration:"5m 30s"},
        {title:"Tere Liye", duration:"2m 20s"}
    ]

export const getSongList = () =>{
    return {
        type:"SONG_LIST",
        payload:songList
    }
}
export const getSelectedSong = (title) =>{
    const songDetail = songList.find(song=>song.title === title)
    return {
        type:"SELECTED_SONG",
        payload:songDetail
    }
}   