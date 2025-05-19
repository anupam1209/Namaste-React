import React from "react";

import "../styles/restaurantMenuCard.css";

const RestaurantMenuMainCard = (props) => {
  const { resMenuData } = props;
  console.log(resMenuData);
  const {
    name,
    avgRatingString,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
    areaName,
  } = resMenuData.data.cards[2].card.card.info;
  const { slaString } = resMenuData.data.cards[2].card.card.info.sla;

  return (
    <>
      <div className="rcard">
        {/* Restaurant Name */}
        {name && <h3 className="rcard__name">{name}</h3>}

        {/* Rating & Price */}
        <div className="rcard__header">
          <div className="rcard__rating">
            <span className="rcard__rating-value">{avgRatingString}</span>
            <span className="rcard__rating-star">★</span>
            <span className="rcard__rating-count">{totalRatingsString}</span>
          </div>
          <div className="rcard__price">{costForTwoMessage}</div>
        </div>

        {/* Cuisines */}
        <div className="rcard__categories">
          {cuisines.map((cuisine, i) => (
            <React.Fragment key={cuisine}>
              <a href={`#${cuisine}`} className="rcard__category-link">
                {cuisine}
              </a>
              {i < cuisines.length - 1 && (
                <span className="rcard__category-sep">, </span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Outlet & Delivery Time */}
        <div className="rcard__footer">
          <div className="rcard__outlet">
            <strong>Outlet</strong> {areaName}
          </div>
          <div className="rcard__time">{slaString}</div>
        </div>
      </div>
    </>
  );
};

export default RestaurantMenuMainCard;
