const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

let trackData = {};
let topArtistData = {};
const davidKey = "dffc35d8f8602596a39469caa1739857"
const robKey = "5a8ebda021926a35d9ffb5aadc69ebc9"
const davidName = "dvdshortland"
const robName = "Robertcarter24"

const fetchTrack = async () => {
  const res = await axios.get(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${davidName}&api_key=${robKey}&format=json&limit=1`);
  const data = await res.data;
  return data;
}

const fetchTopArtists = async () => {
  const res = await axios.get(`http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=${robName}&api_key=${robKey}&format=json&limit=5`)
  const data = await res.data;
  return data;
}

const getTopArtists = async () => {
  const d = await fetchTopArtists()
  topArtistData = d
}

const getTracks = async () => {
  const d = await fetchTrack()
  trackData = d
}
getTracks()
setInterval(() => {
  getTracks()
}, 6000);

app.get('/api/trackData.json', (req, res) => {
  res.json(trackData)
})

app.get('/api/topArtistsData.json', (req, res) => {
  getTopArtists()
  res.json(topArtistData)
})

const routes = ['/','/portfolio','crypto']

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(8000);
console.log("Running on port 8000")