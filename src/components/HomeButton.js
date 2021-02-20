import { Link } from 'react-router-dom'

const HomeButton = ({ onPress }) => {
    return (
        <div id='homeButton'>
            <Link to='/'>
                <div className='ghost-button' >
                    <h3>⏎ Home</h3>
                </div>
            </Link>
        </div>
    )
}

export default HomeButton
