import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router";

const Body = () => {

    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState('');

    useEffect(()=> {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.298655195278855&lng=78.01370646804571&collection=83631&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
        const json = await data.json();
        const restaurantList = json.data.cards.filter(card => card.card.relevance).map(card => card.card.card.info);
        setListOfRestaurant(restaurantList);
        setFilteredRestaurant(restaurantList);
    };

    return listOfRestaurant.length===0 ? (<Shimmer />) : (
        <div className="body">
            <div className="filter">
                <div className="search-box">
                    <input className="search-box" value={searchText} onChange={(event) => {
                        setSearchText(event.target.value);
                    }}/>
                    <button className="search-btn" onClick={()=> {
                        const filteredList = listOfRestaurant.filter(restaurant => restaurant.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestaurant(filteredList);
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestaurant.filter(ele => ele.avgRating>4);
                    setFilteredRestaurant(filteredList);
                }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {
                    filteredRestaurant.map(restaurant => <Link key={restaurant.id} to={"/restaurant/"+restaurant.id}><RestaurantCard key={restaurant.id} resName = {restaurant} /></Link>)
                }
            </div>
        </div>
    );
};

export default Body;