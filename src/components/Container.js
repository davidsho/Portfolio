import Title from './Title'
import AboutMeButton from './AboutMeButton'
import PortfolioButton from './PortfolioButton'
import NowPlaying from './NowPlaying'
import Bitcoin from './Bitcoin'
import Particles from 'react-particles-js'
import './styles/Home.css'

const Container = ({ showAboutMe, setShowAboutMe, ourTrack, isPlaying, bitcoinPrice }) => {
    return (
        <div className={`container `} onClick={() => {showAboutMe && setShowAboutMe(false)}} >
            {/* ${showAboutMe || isPlaying ? 'hide' : ''} */}
            <Title />
            <AboutMeButton onPress={() => setShowAboutMe(!showAboutMe)} />
            <PortfolioButton setShowAboutMe={setShowAboutMe} />
            {isPlaying ? <NowPlaying track={ourTrack} /> : <Particles id='particles-js' />}
            <Bitcoin price={bitcoinPrice} />
        </div>
    )
}

export default Container
