
const TileComp = (props) => {
    const {resData} = props;
    const {tileName, rating} = resData;
    return (

        <div className='tile-container'>
            <img src='https://www.pixelstalk.net/wp-content/uploads/2016/08/Fresh-hot-delicious-food-wallpaper.jpg' alt='food-image'
                className='tile-image' />
            <h2 className="tile-name">{tileName}</h2>
            <span className='tile-rating'>Rating - {rating} / 5</span>
        </div>
    )
};

export default TileComp;
