import Projects from './Projects'
import HomeButton from './HomeButton'
import NowPlaying from './NowPlaying'
import Particles from 'react-particles-js'
import { Link } from 'react-router-dom'

const Portfolio = ({ track, setShowAboutMe }) => {
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
    setShowAboutMe(undefined)
    return (
        <div className='container'>
            <div className='title'>
                <h1>My Portfolio</h1>
            </div>
            <HomeButton />
            {isPlaying && <NowPlaying track={ourTrack} />}
            <Projects />
            <Particles id='particles-js' />
        </div>
    )
}

export default Portfolio
