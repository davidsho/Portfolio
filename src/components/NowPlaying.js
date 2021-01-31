// import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

const NowPlaying = ({ track, device }) => {
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
        <div id={device.device === 'computer' ? 'nowPlaying' : 'nowPlayingMobile'}>
            <a href={track.url} target='_blank' rel='noopener noreferrer'><h4>Listening to {track.name} by {track.artist['#text'] } </h4></a>
            {/* <PlayCircleOutlineIcon fontSize="small" /> */}
        </div>
    )
}

export default NowPlaying
