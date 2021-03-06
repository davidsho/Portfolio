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
  const [bitcoinPrice, setBitcoinPrice] = useState([])

  useEffect(() => {
    console.log('Getting GitHub API')
    const getTasks = async () => {
      const d = await fetchGit()
      setGitData(d)
    }
    getTasks()
  }, [])

  useEffect(() => {
    console.log("Getting Track API")
    const getTracks = async () => {
      const d = await fetchTrackAPI()
      console.log(d)
      setTrackData(d)
    }
    getTracks()
    setInterval(() => {
      getTracks()
    }, 6000);
  }, [])

  // useEffect(() => {
  //   const getTracks = async () => {
  //     const d = await fetchTrack()
  //     setTrackData(d)
  //   }
  //   getTracks()
  //   setInterval(() => {
  //     getTracks()
  //   }, 6000);
  // }, [])

  useEffect(() => {
    const getValue = async () => {
      const d = await fetchBitcoin()
      const val = d.bpi.USD.rate
      // const val = d.USD.buy.toFixed(2)
      console.log(val)
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

  // Fetch LastFM Track
  const fetchTrack = async () => {
    const davidKey = "dffc35d8f8602596a39469caa1739857"
    const robKey = "5a8ebda021926a35d9ffb5aadc69ebc9"
    const davidName = "dvdshortland"
    const robName = "Robertcarter24"
    const res = await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${robName}&api_key=${robKey}&format=json&limit=1`)
    const data = await res.json()
    return data
  }

  // Fetch Track API
  const fetchTrackAPI = async () => {
    const res = await fetch('/api/trackData.json')
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