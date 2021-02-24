import { useState, useEffect } from 'react'
import HomeButton from './HomeButton'
import NowPlaying from './NowPlaying'
import Coin from './Coin';
import Particles from 'react-particles-js'

const Crypto = ({ showAboutMe, setShowAboutMe, track }) => {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');

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

    useEffect(() => {
        const getValue = async () => {
          const d = await fetchCurrencies()
          setCoins(d)
        }
        getValue()
        setInterval(() => {
          getValue()
        }, 6000);
    }, [])

    const handleChange = e => {
        setSearch(e.target.value);
    };

    const filteredCoins = coins.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    );

    const fetchCurrencies = async () => {
        const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false', {cache: "no-store"})
        const data = await res.json()
        return data
    }

    return (
        <div className={`container `} onClick={() => {showAboutMe && setShowAboutMe(false)}}>
            {isPlaying ? <NowPlaying track={ourTrack} /> : <Particles id='particles-js' />}
            <HomeButton />
            <div className='coin-app'>
                <div className='coin-search'>
                    <h1 className='coin-text'>Search a currency</h1>
                    <form>
                        <input
                            className='coin-input'
                            type='text'
                            onChange={handleChange}
                            placeholder='Search'
                        />
                    </form>
                </div>
                {filteredCoins.map(coin => {
                    return (
                        <Coin
                            key={coin.id}
                            name={coin.name}
                            price={coin.current_price}
                            symbol={coin.symbol}
                            marketcap={coin.total_volume}
                            volume={coin.market_cap}
                            image={coin.image}
                            priceChange={coin.price_change_percentage_24h}
                        />
                    );
                })}
            </div>
        </div>
    )
}

export default Crypto
