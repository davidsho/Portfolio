// import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

const NowPlaying = ({ track }) => {
    const getArtists = () => {
        const artistArray = track.item.artists
        const nameArray = []
        for (let artist of artistArray) {
            nameArray.push(artist.name)
        }
        let artistString = nameArray.join(', ')
        return artistString
        // track.item.artists[0].name
    }
    return (
        <div id='nowPlaying'>
            <a href={track.url} target='_blank' rel='noopener noreferrer'><h3 className='now-playing-text'>Listening to <strong>{track.name}</strong> by <strong>{track.artist['#text'] }</strong> </h3></a>
            {/* <PlayCircleOutlineIcon fontSize="small" /> */}
        </div>
    )
}

export default NowPlaying
