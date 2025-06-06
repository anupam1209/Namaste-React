import { useEffect, useState } from "react";

import { MENU_API_PREFIX, MENU_API_SUFFIX } from "../constants/constants.jsx";

const useRestaurantMenu = (resID) => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  //fetch data
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API_PREFIX + resID + MENU_API_SUFFIX);

    const json = await data.json();
    console.log("API response:", json);

    setRestaurantInfo(json);
    console.log("resInfo:", restaurantInfo);
  };

  return restaurantInfo;
};

export default useRestaurantMenu;
