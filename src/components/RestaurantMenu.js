import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {

    const {resId} = useParams();
    const resData = useRestaurantMenu(resId);

    if(resData===null) return <Shimmer />;

    const {name, cuisines, costForTwoMessage}=resData?.cards[2]?.card?.card?.info;

    const itemGroups = resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    .filter(item => 
        item?.card?.card?.title && item?.card?.card?.itemCards
    )

    return (
        <div className="w-[500px] m-2">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            {
                itemGroups.map(category => {
                    return (
                        <div key={category?.card?.card?.categoryId}>
                            <p>{category?.card?.card?.title}</p>
                            <ul>
                                {
                                    category?.card?.card?.itemCards.map(item => {
                                        return (
                                            <li key={item?.card?.info?.id}>{item?.card?.info?.name} - Rs. {item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100}</li>
                                        );
                                    })
                                }
                            </ul>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default RestaurantMenu;