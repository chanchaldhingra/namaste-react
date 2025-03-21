import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";


const Body = () => {

    const [listOfRestaurant, setListOfRestaurant] = useState(resList);

    useEffect(()=> {
        console.log("useEffect called");
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.298655195278855&lng=78.01370646804571&collection=83631&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
        const json = await data.json();
        console.log("data ", json);
    };

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestaurant.filter(ele => ele.avgRating>4);
                    setListOfRestaurant(filteredList);
                }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {
                    listOfRestaurant.map(restaurant => <RestaurantCard key={restaurant.id} resName = {restaurant} />)
                }
            </div>
        </div>
    );
};

export default Body;