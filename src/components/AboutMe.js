import TwitterLogo from './TwitterLogo.png'
import GitHubLogo from './GitHubLogo.png'
import MailLogo from './MailLogo.png'
console.log(TwitterLogo)

const AboutMe = ({ obj, name, show }) => {

    const set_style = () => {
        if (show === undefined) {
            return ''
        } else if (show === true) {
            return 'slide-in'
        } else if (show === false) {
            return 'slide-out'
        } else {
            return ''
        }
    }

    return (
        <div id='aboutMeDiv' className={set_style()} >
            <h3>{name}</h3>
            <p>I'm an eighteen year old full-stack Node.js and Python engineer from the United Kingdom. I have a huge passion for creating and exploring new software and responsive, performant code. Programming since 14, I've learned many proper principals and frameworks. I consider myself forward-thinking and I always love to work in teams.</p>
            <div>
                <img src={obj.avatar_url} alt='Avatar' className='avatar' />
                <a href={`https://twitter.com/${obj.twitter_username}`} target='_blank' rel="noopener noreferrer"><div className='aligned'> <img src={TwitterLogo} alt="Twitter Logo" className='about-image' /> <span className='social-text'>{obj.twitter_username}</span> </div> </a>
                <a href={`mailto:dvdshortland@gmail.com`} target='_blank' rel="noopener noreferrer"><div className='aligned'> <img src={MailLogo} alt="Email Logo" className='about-image' /> <span className='social-text'>dvdshortland@gmail.com</span> </div> </a>
                <a href={obj.html_url} target='_blank' rel="noopener noreferrer"><div className='aligned'> <img src={GitHubLogo} alt="GitHub Logo" className='about-image' /> <span className='social-text'>{obj.login}</span> </div> </a>
            </div>
        </div>
    )
}

export default AboutMe
