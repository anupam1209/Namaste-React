import "../styles/style.css";
import RestaurantCard from "./RestaurantCard";
import ShimmerUI from "./ShimmerUI";

// we will use the useState hook (named export)
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { SWIGGY_API } from "../constants/constants";

export const Body = () => {
  // State for the filtered restaurant list that we display
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchText, setSearchText] = useState("");

  const { resID } = useParams();

  const fetchData = async () => {
    setIsLoading(true);
    const data = await fetch(SWIGGY_API);

    const jsonData = await data.json();

    const restaurantList = jsonData?.data?.cards?.slice(3); //using optional chaining

    setListOfRestaurants(restaurantList);
    console.log("restaurantList: ", restaurantList);
    setAllRestaurants(restaurantList);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <ShimmerUI />;
  }

  return (
    <div className="body">
      <div className="search">
        <div className="search-box">
          <input
            type="text"
            className="input-search"
            placeholder="Search by restaurant..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key == "Enter") {
                const filteredRestaurants = allRestaurants.filter((res) => {
                  return res.card.card.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase());
                });

                // 3. render the filtered restaurants
                setListOfRestaurants(filteredRestaurants);
                setSearchText("");
              }
            }}
          />
        </div>
        <div>
          <button
            onClick={() => {
              console.log(searchText);
              // 1. search for the restaurants with the search text
              // 2. filter the restaurants
              const filteredRestaurants = allRestaurants.filter((res) => {
                return res.card.card.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });

              // 3. render the filtered restaurants
              setListOfRestaurants(filteredRestaurants);
              setSearchText("");
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div>
        <button
          onClick={() => {
            const newList = listOfRestaurants.filter(
              (res) => res.card.card.info.avgRating > 4.3
            );

            setListOfRestaurants(newList);
          }}
          className="filter-btn"
        >
          High Rated Restaurants
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            setListOfRestaurants(allRestaurants);
          }}
          className="filter-btn"
        >
          Show all
        </button>
      </div>
      <div className="restaurant-container">
        {/* there is something called as props, okay? */}
        {/* props are nothing but arguments to a react component */}
        {listOfRestaurants.length === 0 ? (
          <p>No restaurants found!!</p>
        ) : (
          listOfRestaurants.map((restaurant) => (
            <Link
              style={{ textDecoration: "none", color: "GrayText" }}
              key={restaurant.card.card.info.id}
              to={"/restaurant/" + restaurant.card.card.info.id}
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
