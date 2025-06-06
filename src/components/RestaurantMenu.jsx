import { useParams } from "react-router-dom";

import RestarurantMenuMainCard from "./RestaurantMenuMainCard";
import "../styles/restaurantMenuCard.css";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resID } = useParams();

  // CREATE A CUSTOM HOOK HERE
  const restaurantInfo = useRestaurantMenu(resID);

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
