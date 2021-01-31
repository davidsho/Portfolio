import Projects from './Projects'
import Particles from 'react-particles-js'

const Portfolio = () => {
    return (
        <div className='container'>
            <div className='title'>
                <h1>My Portfolio</h1>
            </div>
            <Projects />
            <Particles id='particles-js' />
        </div>
    )
}

export default Portfolio
