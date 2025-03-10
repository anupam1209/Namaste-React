import "../styles/style.css";
import resList from "../data/restaurantData";
import RestaurantCard from "./RestaurantCard";

// we will use the useState hook (named export)
import { useState } from "react";

export const Body = () => {
  // Line 10 uses the useState hook from React to create a state variable
  // useState is a React Hook that lets you add state to functional components
  // It returns an array with two elements: the current state value and a function to update it
  // Here we're initializing the state with the restaurant list data from resList
  const [restaurantList, setRestaurantList] = useState(resList);

  return (
    <div className="body">
      <div className="search-box">
        <input
          type="text"
          className="input-search"
          placeholder="Type to Search..."
        />
      </div>
      <div>
        <button
          onClick={() => {
            const newList = resList.filter(
              (res) => res.card.card.info.avgRating < 4.2
            );

            setRestaurantList(newList);
          }}
          className="filter-btn"
        >
          Low Rated Restaurants
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            setRestaurantList(resList);
          }}
          className="filter-btn"
        >
          Show all
        </button>
      </div>
      <div className="restaurant-container">
        {/* there is something called as props, okay? */}
        {/* props are nothing but arguments to a react component */}
        {restaurantList.map((restaurant) => (
          <RestaurantCard
            key={restaurant.card.card.info.id}
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
