import HomeButton from './HomeButton'
import NowPlaying from './NowPlaying'
import Particles from 'react-particles-js'

const Crypto = ({ showAboutMe, setShowAboutMe, track }) => {
    let ourTrack, isPlaying;
    try {
        ourTrack = track.recenttracks.track[0]        
    } catch (error) {
        ourTrack = {'@attr': {nowPlaying: false}}
    }
    try {
        isPlaying = ourTrack['@attr'].nowplaying
    } catch (error) {
        isPlaying = false
    }

    return (
        <div className={`container `} onClick={() => {showAboutMe && setShowAboutMe(false)}}>
            {isPlaying ? <NowPlaying track={ourTrack} /> : <Particles id='particles-js' />}
            <HomeButton />
        </div>
    )
}

export default Crypto
