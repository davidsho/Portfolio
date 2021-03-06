const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

let trackData = []

const fetchTrack = async () => {
  const davidKey = "dffc35d8f8602596a39469caa1739857"
  const robKey = "5a8ebda021926a35d9ffb5aadc69ebc9"
  const davidName = "dvdshortland"
  const robName = "Robertcarter24"

  const res = await axios.get(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${robName}&api_key=${robKey}&format=json&limit=1`);
  const data = await res.data;
  return data;
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

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.listen(8000);
console.log("Running on port 8000")