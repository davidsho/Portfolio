const Bitcoin = ({ price }) => {
    return (
        <div id='bitcoin'>
            <h3>Bitcoin currently trading at ${price.toLocaleString()}</h3>
        </div>
    )
}

export default Bitcoin
