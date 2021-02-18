import Projects from './Projects'
import Particles from 'react-particles-js'
import { Link } from 'react-router-dom'

const Portfolio = () => {
    return (
        <div className='container'>
            <div className='title'>
                <h1>My Portfolio</h1>
            </div>
            <div className='subtitle'>
                <Link to='/'><h3>Home</h3></Link>
            </div>
            <Projects />
            <Particles id='particles-js' />
        </div>
    )
}

export default Portfolio
