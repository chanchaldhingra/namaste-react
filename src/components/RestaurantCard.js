import {imageBaseUrl} from "../utils/constants";

const RestaurantCard = ({resName}) => {

    const {name, cuisines, avgRating, sla, cloudinaryImageId, costForTwo}=resName;
    return (
        <div className="w-[200px] h-[380px] m-2 p-2 bg-[#f0f0f0] border-2 flex items-center flex-col">
            <img className="w-[180px] h-[180px] m-2" alt="res-logo" 
                src={imageBaseUrl + cloudinaryImageId} />
            
            <div>
                <h3>{name}</h3>
                <h4>{cuisines.join(', ')}</h4>
                <h4>{avgRating} stars</h4>
                <h4>{costForTwo}</h4>
                <h4>{sla.slaString}</h4>
            </div>
        </div>
    );
};

export default RestaurantCard;