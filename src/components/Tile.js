import {IMG_URL} from "../utils/constants";

export const TileComp = (props) => {
    const {resData} = props;
    const {tileName, rating} = resData;
    return (

        <div className='tile-container'>
            <img src={IMG_URL} alt='food-image'
                className='tile-image' />
            <h2 className="tile-name">{tileName}</h2>
            <span className='tile-rating'>Rating - {rating} / 5</span>
        </div>
    )
};
