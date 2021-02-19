import { Link } from 'react-router-dom'

const PortfolioButton = ({ setShowAboutMe }) => {
    return (
        <div id='portfolioButton'>
            <Link to='/portfolio'>
                <div className='ghost-button' onClick={() => setShowAboutMe(undefined)} >
                    <h3>Portfolio</h3>
                </div>
            </Link>
        </div>
    )
}

export default PortfolioButton
