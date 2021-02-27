const ToTopButton = () => {
    const scrollToTop = () => {
        console.log("Clicked")
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
    return (
        <div id='toTopButton' onClick={scrollToTop}>
                <div className='ghost-button' >
                    <h3>👆</h3>
                </div>
        </div>
    )
}

export default ToTopButton
