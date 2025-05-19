import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import RestarurantMenuMainCard from "./RestaurantMenuMainCard";
import "../styles/restaurantMenuCard.css";

const RestaurantMenu = () => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);

  const { resID } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.66770&lng=77.43370&restaurantId=" +
        resID +
        "&catalog_qa=undefined&query=Burger&submitAction=ENTER"
    );

    const json = await data.json();
    console.log("API response:", json);

    setRestaurantInfo(json);
    console.log("resInfo :", restaurantInfo);
  };

  if (restaurantInfo === null) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="restaurant-main-body">
        <RestarurantMenuMainCard resMenuData={restaurantInfo} />
      </div>
    </>
  );
};

export default RestaurantMenu;
