import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import { SWIGGY_RES_API_URL } from "../Utils/constants";
import useRestaurantMenu from "../Utils/useRestaurantMenu";

const RestaurantMenu = () => {

    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);

    console.log(resInfo?.cards[2]?.card?.card?.info);

    if(resInfo === null) return <Shimmer/>;


    const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

    //------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // Give me a code Need to assign Array of object to
    // const itemCards from below json which is a Array of nested objects, filter by checking
    // if itemcards array is present in any of the nested objects and check
    // if any of the object.card.info is having proprty type and its value is "ITEM"
    // using Advanced JS resInfo ? .cards[4] ? .groupedCard ? .cardGroupMap ? .REGULAR ? .cards[12].card.card.itemCards[0].card.info.type 
    // and we are not sure about the index of crads and itemcards

            const itemCards = [];

            // Recursive function to traverse any nested object or array
            function findItemCards(node) {
            if (Array.isArray(node)) {
                for (const item of node) {
                findItemCards(item);
                }
            } else if (node && typeof node === 'object') {
                // Check if this node has itemCards and meets the condition
                if (Array.isArray(node.itemCards)) {
                const hasItem = node.itemCards.some(
                    ic => ic?.card?.info?.type === "ITEM"
                );
                if (hasItem) {
                    itemCards.push(...node.itemCards);
                }
                }

                // Recurse through all keys
                for (const key of Object.keys(node)) {
                findItemCards(node[key]);
                }
            }
            }

            // Start the search
            findItemCards(resInfo);

            // itemCards now contains all matching itemCards
            console.log(itemCards);

//--------------------------------------------------------------------------------------------------------------            

    // const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;

    console.log(itemCards);

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {
                    itemCards.map(item => 
                        <li key ={item?.card?.info?.id}>{item?.card?.info?.name} - ₹ {item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}</li>
                    )
                }
               
            </ul>
        </div>
    )
}

export default RestaurantMenu;