const AboutMe = ({ onPress }) => {
    return (
        <div id='aboutMeButton'>
            <button className='ghost-button' onClick={onPress}>
                <h3>About Me</h3>
            </button>
        </div>
    )
}

export default AboutMe
