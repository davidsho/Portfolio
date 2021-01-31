const Background = (url) => {
    console.log(url.url)
    return (
        <div style={{backgroundImage: `url(${url.url})`, backgroundSize: "cover", height: "100%", width: '100%'}}>
            
        </div>
    )
}

export default Background
