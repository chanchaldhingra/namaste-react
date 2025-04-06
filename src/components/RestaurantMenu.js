import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {

    const [showItems, setShowItems] = useState(0);
    const { resId } = useParams();
    const resData = useRestaurantMenu(resId);

    if (resData === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage } = resData?.cards[2]?.card?.card?.info;

    const itemGroups = resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
        .filter(item =>
            item?.card?.card?.title && item?.card?.card?.itemCards
        )

    return (
        <div className="w-[1000px] mx-auto text-center px-2 py-2">
            <h1 className="font-bold text-2xl">{name}</h1>
            <p className="my-3 font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</p>
            {
                itemGroups.map((category, index) => (<RestaurantCategory key={category?.card?.card?.categoryId}
                    data={category?.card?.card} showItems={showItems===index} toggleExpand={setShowItems} index={index} />))
            }
        </div>
    );
};

export default RestaurantMenu;