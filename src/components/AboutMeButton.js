const AboutMe = ({ onPress }) => {
    return (
        <div id='aboutMeButton'>
            <div className='ghost-button' onClick={onPress}>
                <h3>About Me</h3>
            </div>
        </div>
    )
}

export default AboutMe
