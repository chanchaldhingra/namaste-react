

import {imageBaseUrl} from "../utils/constants";

const RestaurantCard = ({resName}) => {

    const {name, cuisines, avgRating, sla, cloudinaryImageId, costForTwo}=resName;
    return (
        <div className="res-card">
            <img className="res-logo" alt="res-logo" 
                src={imageBaseUrl + cloudinaryImageId} />
            
            <h3>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.slaString}</h4>
        </div>
    );
};

export default RestaurantCard;