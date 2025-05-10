
import { useEffect, useState } from "react";
import { SWIGGY_RES_API_URL } from "../Utils/constants";
const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        console.log("Calling fetchUserData");
        fetchMenuData();
    },[]);

    const fetchMenuData = async () => {
        const data = await fetch(SWIGGY_RES_API_URL + resId);
        const json = await data.json();
        setResInfo(json?.data);
    }

    return resInfo;
}

export default useRestaurantMenu;