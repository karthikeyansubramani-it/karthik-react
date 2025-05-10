import { useEffect, useState } from "react";
import restaurants from "../Utils/mock";
import RestaurantCard from "./RestaurantCard";
import { SWIGGY_API_URL, SWIGGY_UPDATE_API_PAYLOAD, SWIGGY_UPDATE_API_URL } from "../Utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../Utils/useOnlineStatus.js";

const Body = () => {
  
console.log("Body Render")
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const isOnline = useOnlineStatus();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () =>{
        const data = await fetch(SWIGGY_API_URL);
        const json = await data.json();
        console.log(json);
        console.log(json?.data?.cards[1]?.card.card.gridElements?.infoWithStyle.restaurants);
        setListOfRestaurant(json?.data?.cards[1]?.card.card.gridElements?.infoWithStyle.restaurants);
        setFilteredRestaurants(json?.data?.cards[1]?.card.card.gridElements?.infoWithStyle.restaurants);
     
    }

    const fetchUpdatedData = async () => {
        const data = await fetch(SWIGGY_UPDATE_API_URL,{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(SWIGGY_UPDATE_API_PAYLOAD)
        });
        const json = await data.json();
        console.log(json);
        setListOfRestaurant(listOfRestaurants.push(json?.data?.cards[1]?.card.card.gridElements?.infoWithStyle.restaurants));
        setFilteredRestaurants(filteredRestaurants.push(json?.data?.cards[1]?.card.card.gridElements?.infoWithStyle.restaurants));
    }

    if( !isOnline ) {return(
      <h1>
        Looks like you are offline!!, please check your internet connection
      </h1>
    )
  }

//Conditional rendering
  return listOfRestaurants.length <= 0 ? <Shimmer/> : (
    <div className="body" >
    
      <div className="search">
        
        <input type="text" 
            onChange={(e) => {
                setSearchText(e.target.value);
                let filteredRestaurants = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(e.target.value));
                setFilteredRestaurants(filteredRestaurants);
            }} value = {searchText}/> 

        <button 
            onClick={() => {
                let filteredRestaurants = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                setFilteredRestaurants(filteredRestaurants);
                console.log(searchText);
            }}
        >search</button>

        <button
            className="filter-button"
            onClick={() => {
            let filteredRestaurants = listOfRestaurants.filter(
                (restaurant) => restaurant.info.avgRating > 4
            );
            setFilteredRestaurants(filteredRestaurants);
            }}>
            Toggle Restaurants
        </button>

      </div>
      
      <div className="res-container" 
                >
        {filteredRestaurants.map((restaurant) => (
          <Link key={restaurant.info.id} to = {"/restaurant/" + restaurant.info.id}><RestaurantCard  resData={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
