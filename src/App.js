import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Container from './components/Container'
import AboutMe from './components/AboutMe'
import Portfolio from './components/Portfolio'

const App = () => {
  const [showAboutMe, setShowAboutMe] = useState()
  const [gitData, setGitData] = useState([])
  const [trackData, setTrackData] = useState([])

  const state={
    device: !!navigator.maxTouchPoints ? 'mobile' : 'computer',
    orientation: !navigator.maxTouchPoints ? 'desktop' : !window.screen.orientation.angle ? 'portrait' : 'landscape'
  }

  const [deviceState, setDeviceState] = useState(state)

  useEffect(() => {
    console.log('Getting APIs')
    const getTasks = async () => {
      const d = await fetchGit()
      setGitData(d)
    }
    getTasks()
  }, [])

  useEffect(() => {

  })

  useEffect(() => {
    const getTracks = async () => {
      const d = await fetchTrack()
      setTrackData(d)
    }
    getTracks()
    setInterval(() => {
      const getTracks = async () => {
        const d = await fetchTrack()
        setTrackData(d)
      }
      getTracks()
    }, 6000);
  }, [])


  // Fetch GitHub Profile
  const fetchGit = async () => {
    const res = await fetch('https://api.github.com/users/davidsho')
    const data = await res.json()
    return data
  }

  // Fetch LastFM Track
  const fetchTrack = async () => {
    const res = await fetch('https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=dvdshortland&api_key=dffc35d8f8602596a39469caa1739857&format=json&limit=1')
    const data = await res.json()
    return data
  }

  const detect = () => {
    setDeviceState({
      device: !!navigator.maxTouchPoints ? 'mobile' : 'computer',
      orientation: !navigator.maxTouchPoints ? 'desktop' : !window.screen.orientation.angle ? 'portrait' : 'landscape'
    })
  }

  window.addEventListener("resize", detect)

  // console.log(deviceState)


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
      <Route path='/' exact render={(props) => (
        <>
          <div className='screen' style={isPlaying ? { backgroundImage: `url(${ourTrack.image.slice(-1)[0]['#text']})` } : {}}>
            <AboutMe show={showAboutMe} name="David Shortland" obj={gitData} />
            <Container showAboutMe={showAboutMe} setShowAboutMe={setShowAboutMe} track={trackData} device={deviceState} />
          </div>
        </>
      )} />
      <Route path='/portfolio' component={Portfolio} />
    </Router>
  )
}

export default App