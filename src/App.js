import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Container from './components/Container'
import AboutMe from './components/AboutMe'
import Portfolio from './components/Portfolio'
import Crypto from './components/Crypto'
import DefaultBackground from './components/Images/DefaultBackground.jpeg'

const App = () => {
  const [showAboutMe, setShowAboutMe] = useState()
  const [gitData, setGitData] = useState([])
  const [trackData, setTrackData] = useState([])
  const [artistsData, setArtistsData] = useState([])
  const [bitcoinPrice, setBitcoinPrice] = useState([])

  // Use Effect for GitHub API
  useEffect(() => {
    console.log('Getting GitHub API')
    const getGitHub = async () => {
      const d = await fetchGit()
      setGitData(d)
    }
    getGitHub()
  }, [])

  // Use Effect for Track API
  useEffect(() => {
    console.log("Getting Track API")
    const getTracks = async () => {
      const d = await fetchTrackAPI()
      setTrackData(d)
    }
    getTracks()
    setInterval(() => {
      getTracks()
    }, 6000);
  }, [])

  // Use Effect for Artist API
  useEffect(() => {
    console.log("Getting Artists API")
    const getArtists = async () => {
      const d = await fetchTopArtistsAPI()
      console.log(d)
      setArtistsData(d)
    }
    getArtists()
  }, [])

  // Use Effect for Bitcoin API
  useEffect(() => {
    const getValue = async () => {
      const d = await fetchBitcoin()
      const val = d.bpi.USD.rate
      setBitcoinPrice(val)
    }
    getValue()
    setInterval(() => {
      getValue()
    }, 30000);
  }, [])

  // Fetch Bitcoin Value
  const fetchBitcoin = async () => {
    const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    // const res = await fetch('https://blockchain.info/ticker', {cache: "no-store"})
    const data = await res.json()
    return data
  }

  // Fetch GitHub Profile
  const fetchGit = async () => {
    const res = await fetch('https://api.github.com/users/davidsho')
    const data = await res.json()
    return data
  }

  // Fetch Track API
  const fetchTrackAPI = async () => {
    const res = await fetch('/api/trackData.json')
    const data = await res.json()
    return data
  }

  // Fetch Top Artists API
  const fetchTopArtistsAPI = async () => {
    const res = await fetch('/api/topArtistsData.json')
    const data = await res.json()
    return data
  }

  let ourTrack, isPlaying;
  try {
      ourTrack = trackData.recenttracks.track[0]        
  } catch (error) {
      ourTrack = {'@attr': {nowPlaying: false}}
  }
  try {
      isPlaying = ourTrack['@attr'].nowplaying
  } catch (error) {
      isPlaying = false
  }


  return (
    <Router>
      {isPlaying ? <div className='bg-image' style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${ourTrack.image.slice(-1)[0]['#text']})` }}></div> : <div className='bg-image' style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${DefaultBackground})` }}></div>}
      <Route path='/' exact render={(props) => (
        <>
          <div className='screen' >
            <AboutMe show={showAboutMe} name="David Shortland" obj={gitData} />
            <Container showAboutMe={showAboutMe} setShowAboutMe={setShowAboutMe} ourTrack={ourTrack} isPlaying={isPlaying} bitcoinPrice={bitcoinPrice} />
          </div>
        </>
      )} />
      <Route path='/portfolio' render={(props) => (
        <>
          <Portfolio ourTrack={ourTrack} isPlaying={isPlaying} setShowAboutMe={setShowAboutMe} />
        </>
      )} />
      <Route path='/crypto' render={(props) => (
        <>
          <Crypto showAboutMe={showAboutMe} setShowAboutMe={setShowAboutMe} ourTrack={ourTrack} isPlaying={isPlaying} />
        </>
      )} />
    </Router>
  )
}

export default App