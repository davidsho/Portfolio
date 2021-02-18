const Project = ({ id, projectTitle, projectImage, projectText, projectRole }) => {
    return (
        <div id={id} className='project slide-in-left' >
            <div className='project-image-role-container'>
                <img src={projectImage} alt='Avatar' className='project-image' />
                <h4>{projectRole}</h4>
            </div>
            <div className='project-title-text-container'>
                <h3>{projectTitle}</h3>
                <h4>{projectText}</h4>
            </div>
        </div>
    )
}

export default Project
