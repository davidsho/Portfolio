import Projects from './Projects'
import HomeButton from './HomeButton'
import NowPlaying from './NowPlaying'
import Particles from 'react-particles-js'

const Portfolio = ({ ourTrack, isPlaying, setShowAboutMe }) => {
    setShowAboutMe(undefined)
    return (
        <div className='container'>
            <div className='title'>
                <h1>My Portfolio</h1>
            </div>
            <HomeButton />
            {isPlaying ? <NowPlaying track={ourTrack} /> : <Particles id='particles-js' />}
            <Projects />
        </div>
    )
}

export default Portfolio
