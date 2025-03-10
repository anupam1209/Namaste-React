import "../styles/style.css";
import { CDN_URL, RATING_URL } from "../constants/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, avgRating, cuisines, areaName } =
    resData.card.card.info;
  const { deliveryTime } = resData.card.card.info.sla;

  return (
    <div className="restaurant-card">
      <img className="res-image" src={CDN_URL + cloudinaryImageId} />
      <div className="res-details">
        <h3>{name}</h3>
        <div className="rating-delivery">
          <div>
            <img
              className="res-rating"
              src={RATING_URL}
            />
          </div>
          <div style={{ marginLeft: "-12px", marginRight: "25px" }}>
            {" "}
            {avgRating}
          </div>
          <div>
            {" "}
            <img
              className="delivery-logo"
              src="https://www.shutterstock.com/image-vector/food-delivery-man-riding-red-600nw-1327144634.jpg"
            />
          </div>
          <div style={{ marginLeft: "-10px" }}>{deliveryTime} minutes</div>
        </div>
        <div>
          <i>{cuisines.join(", ")}</i>
        </div>
        <br />
        <div>
          <b>Area: {areaName}</b>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
