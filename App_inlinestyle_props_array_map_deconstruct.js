import React from "react";
import ReactDOM from "react-dom/client";
import { restaurants } from "./src/Utils/mock";

const Header = () => {

    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src = "https://img.freepik.com/premium-vector/food-ordering-app-logo-with-points-fork-shapes-center_666184-195.jpg?w=740"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const style = {
    "backgroundColor": "lightgray"
}

const RestaurantCard= (props) => {
    const {resData} = props
    console.log(resData.info.name);
    return (
        //ways to inline styling JSX
        // <div className="res-card" style={style}>
        // <div className="res-card" style={{"backgroundColor": "lightgray"}}>
        // <div className="res-card">
        //     <img className="res-logo" alt ="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/4/9/6c3e0818-7976-46b0-86f6-493874c7e28b_806891.jpg"/>
        //     <h3>
        //       Pizza Hut
        //     </h3>
        //     <h4>Indian, American, Asian</h4>
        //     <h4>4.2 Stars</h4>
        //     <h4>38 minutes</h4>

        // </div>

        <div className="res-card">
            <img className="res-logo" alt ="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.info.cloudinaryImageId}/>
            <h3>
            {resData.info.name}
            </h3>
            <h5>{resData.info.cuisines.join(", ")}</h5>
            <h5>{resData.info.avgRating} Ratings {resData.info.sla.deliveryTime} mins</h5>
            <h5>{resData.info.costForTwo}</h5>

        </div>
    );
}
let i =0;
const Body = () =>{
    return(
            <div className="body">
                <div className="search">
                    Search
                </div>
                <div className="res-container">
                    {
                        
                        restaurants.map((restaurant) => <RestaurantCard key = {restaurant.info.id} resData= {restaurant}/>)
                    }
                 {/* <RestaurantCard resData={restaurants[0]}/> */}
                 {/* <RestaurantCard restaurantName = "Pizza Hut" cuisine="American, Fast Food" rating="4.2 Stars" deliveryTime="38 minutes"/> */}
                 
                </div>
            </div>
    );
}

const AppLayout = () =>{
    return  <div className="app">
            <Header/>
            <Body/>
        </div>
    
}    
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)
