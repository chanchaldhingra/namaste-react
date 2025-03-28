import { useEffect, useState } from "react";
import { menuUrl } from "../utils/constants";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {

    const {resId} = useParams();

    const [restData, setResData] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(menuUrl+resId);
        const json = await data.json();
        console.log("json ", json);
        setResData(json.data);
    };

    if(restData===null) return <Shimmer />;

    const {name, cuisines, costForTwoMessage}=restData?.cards[2]?.card?.card?.info;

    const itemGroups = restData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    .filter(item => 
        item?.card?.card?.title && item?.card?.card?.itemCards
    )

    console.log("itemGroup ", itemGroups);


    return (
        <div className="Menu">
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