import { Link } from 'react-router-dom'

const Bitcoin = ({ price }) => {
    return (
        <div id='bitcoin'>
            <Link to='/crypto' >
                <h3 id='bitcoinText'>Bitcoin currently trading at ${price.toLocaleString()}</h3>
            </Link>
        </div>
    )
}

export default Bitcoin
