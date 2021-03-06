import { useEffect } from 'react'
import Projects from './Projects'
import HomeButton from './HomeButton'
import NowPlaying from './NowPlaying'
// import ToTopButton from './ToTopButton'
import Particles from 'react-particles-js'
import './styles/Portfolio.css'

const Portfolio = ({ ourTrack, isPlaying, setShowAboutMe }) => {
    useEffect(() => {
        setShowAboutMe(undefined)
    })
    return (
        <div className='container'>
            {/* <div id='topContainer'> */}
            <HomeButton />
            {isPlaying ? <NowPlaying track={ourTrack} /> : <Particles id='particles-js' />}
            {/* </div> */}
            <div className='title'>
                <h1>My Portfolio</h1>
            </div>
            <Projects />
            {/* <ToTopButton /> */}
        </div>
    )
}

export default Portfolio
