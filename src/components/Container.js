import Title from './Title'
import AboutMeButton from './AboutMeButton'
import PortfolioButton from './PortfolioButton'
import NowPlaying from './NowPlaying'
import Bitcoin from './Bitcoin'
import Particles from 'react-particles-js'

const Container = ({ showAboutMe, setShowAboutMe, track, bitcoinPrice, device }) => {
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
        <div className={`container `} onClick={() => {showAboutMe && setShowAboutMe(false)}} >
            {/* ${showAboutMe || isPlaying ? 'hide' : ''} */}
            <Title />
            <AboutMeButton onPress={() => setShowAboutMe(!showAboutMe)} />
            <PortfolioButton setShowAboutMe={setShowAboutMe} />
            {isPlaying && <NowPlaying track={ourTrack} device={device} />}
            <Bitcoin price={bitcoinPrice} />
            <Particles id='particles-js' />
        </div>
    )
}

export default Container
