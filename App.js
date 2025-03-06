import React from "react";
import ReactDOM from "react-dom/client";

import namasteLogo from "./namaste.png";
import "./style.css";

const resList = [
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "291456",
          name: "The Fritter Company",
          cloudinaryImageId: "3660c857274de528702f316b4a7a1996",
          locality: "2nd Stage",
          areaName: "Btm Layout",
          costForTwo: "₹200 for two",
          cuisines: [
            "Burgers",
            "American",
            "shawarma",
            "Rolls & Wraps",
            "Beverages",
            "Fast Food",
            "Continental",
          ],
          avgRating: 4.3,
          parentId: "21135",
          avgRatingString: "4.3",
          totalRatingsString: "4.4K+",
          promoted: true,
          adTrackingId:
            "cid=25885062~p=0~adgrpid=25885062#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=291456~eid=1ec59aa7-0e11-47b6-a81d-11571bcbac13~srvts=1741115181957~collid=83637",
          sla: {
            deliveryTime: 26,
            lastMileTravel: 5,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "5.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-03-05 06:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "60% OFF",
            subHeader: "UPTO ₹120",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "25885062",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=291456&source=collection&query=Burger",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "5934",
          name: "Burger King",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/1/902cfa62-974d-43d4-955c-7252014c48c1_5934.jpg",
          locality: "Koramangala",
          areaName: "Koramangala",
          costForTwo: "₹350 for two",
          cuisines: ["Burgers", "American"],
          avgRating: 4.3,
          parentId: "166",
          avgRatingString: "4.3",
          totalRatingsString: "100K+",
          sla: {
            deliveryTime: 20,
            lastMileTravel: 1.6,
            serviceability: "SERVICEABLE",
            slaString: "20-25 mins",
            lastMileTravelString: "1.6 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-03-05 06:55:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                description: "bolt!",
              },
              {
                imageId: "Rxawards/_CATEGORY-Burger.png",
                description: "Delivery!",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      description: "bolt!",
                      imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                    },
                  },
                  {
                    attributes: {
                      description: "Delivery!",
                      imageId: "Rxawards/_CATEGORY-Burger.png",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "60% OFF",
            subHeader: "UPTO ₹120",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.2",
              ratingCount: "4.0K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=5934&source=collection&query=Burger",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "151076",
          name: "Captain Olive",
          cloudinaryImageId: "f5f9d4821b9c667a424d971079f95815",
          locality: "2nd Stage",
          areaName: "BTM Layout",
          costForTwo: "₹350 for two",
          cuisines: [
            "Burgers",
            "American",
            "shawarma",
            "Rolls & Wraps",
            "Beverages",
            "Fast Food",
            "Continental",
          ],
          avgRating: 4.3,
          parentId: "21078",
          avgRatingString: "4.3",
          totalRatingsString: "9.8K+",
          promoted: true,
          adTrackingId:
            "cid=25885060~p=2~adgrpid=25885060#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=151076~eid=fd124d01-5d6b-4afd-8149-c34deb70de8a~srvts=1741115181957~collid=83637",
          sla: {
            deliveryTime: 23,
            lastMileTravel: 5,
            serviceability: "SERVICEABLE",
            slaString: "20-25 mins",
            lastMileTravelString: "5.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-03-05 06:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {},
              textBased: {},
              imageBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "60% OFF",
            subHeader: "UPTO ₹120",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "25885060",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=151076&source=collection&query=Burger",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "23678",
          name: "McDonald's",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/edc568f6-6813-4f2d-a670-911788f1f04f_23678.jpg",
          locality: "5th Block",
          areaName: "Koramangala",
          costForTwo: "₹400 for two",
          cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
          avgRating: 4.5,
          parentId: "630",
          avgRatingString: "4.5",
          totalRatingsString: "64K+",
          sla: {
            deliveryTime: 15,
            lastMileTravel: 1.3,
            serviceability: "SERVICEABLE",
            slaString: "15-20 mins",
            lastMileTravelString: "1.3 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-03-05 02:45:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                description: "bolt!",
              },
              {
                imageId: "Rxawards/_CATEGORY-Burger.png",
                description: "Delivery!",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                      description: "bolt!",
                    },
                  },
                  {
                    attributes: {
                      imageId: "Rxawards/_CATEGORY-Burger.png",
                      description: "Delivery!",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "20% OFF",
            subHeader: "UPTO ₹50",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=23678&source=collection&query=Burger",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "578378",
          name: "Burgerama",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/5/19da9fe3-09d0-42c4-9172-f3b41861ae70_578378.jpg",
          locality: "2nd  Stage",
          areaName: "Indiranagar",
          costForTwo: "₹600 for two",
          cuisines: ["Fast Food", "American", "Beverages"],
          avgRating: 4.2,
          parentId: "8993",
          avgRatingString: "4.2",
          totalRatingsString: "3.2K+",
          promoted: true,
          adTrackingId:
            "cid=25868833~p=3~adgrpid=25868833#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=578378~eid=89f7cb18-2388-4b86-9d52-a68778029fc9~srvts=1741115181957~collid=83637",
          sla: {
            deliveryTime: 29,
            lastMileTravel: 6.6,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "6.6 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-03-05 04:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "newg.png",
                description: "Gourmet",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "newg.png",
                      description: "Gourmet",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "60% OFF",
            subHeader: "UPTO ₹120",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "25868833",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=578378&source=collection&query=Burger",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "65797",
          name: "Leon's - Burgers & Wings (Leon Grill)",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/14/33bfb682-d5fa-4054-9e2c-31911e34ebf6_65797.jpg",
          locality: "Koramangala",
          areaName: "Koramangala",
          costForTwo: "₹300 for two",
          cuisines: [
            "American",
            "Snacks",
            "Turkish",
            "Portuguese",
            "Continental",
          ],
          avgRating: 4.5,
          parentId: "371281",
          avgRatingString: "4.5",
          totalRatingsString: "55K+",
          sla: {
            deliveryTime: 16,
            lastMileTravel: 1.4,
            serviceability: "SERVICEABLE",
            slaString: "15-20 mins",
            lastMileTravelString: "1.4 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-03-05 04:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                description: "bolt!",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                      description: "bolt!",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "50% OFF",
            subHeader: "UPTO ₹100",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.5",
              ratingCount: "4.7K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=65797&source=collection&query=Burger",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "3013",
          name: "Backyard Burgers and Grill",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/6/12/1e47779e-950d-4a2e-8784-f9456609c937_1c355345-b92c-4f75-b9bd-51ffa34acb8e.jpg",
          locality: "Indiranagar",
          areaName: "Indiranagar",
          costForTwo: "₹350 for two",
          cuisines: [
            "Burgers",
            "Snacks",
            "American",
            "Beverages",
            "Desserts",
            "Fast Food",
            "Arabian",
            "Indian",
            "Salads",
            "Korean",
          ],
          avgRating: 4.1,
          parentId: "388154",
          avgRatingString: "4.1",
          totalRatingsString: "1.7K+",
          promoted: true,
          adTrackingId:
            "cid=25885385~p=5~adgrpid=25885385#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=3013~eid=b5f31a47-2689-4b9a-aefe-5120aaba1f3e~srvts=1741115181957~collid=83637",
          sla: {
            deliveryTime: 28,
            lastMileTravel: 5.7,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "5.7 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-03-05 03:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textExtendedBadges: {},
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "20% OFF",
            subHeader: "UPTO ₹50",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.6",
              ratingCount: "212",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "25885385",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=3013&source=collection&query=Burger",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
];

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={namasteLogo} alt="app logo" />
        <span className="company-name">Namaste Food Inc.</span>
      </div>
      <div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, avgRating, cuisines, areaName } =
    resData.card.card.info;
  const { deliveryTime } = resData.card.card.info.sla;

  return (
    <div className="restaurant-card">
      <img
        className="res-image"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <div className="res-details">
        <h3>{name}</h3>
        <div className="rating-delivery">
          <div>
            <img
              className="res-rating"
              src="https://img.freepik.com/free-vector/illustration-favorite-star_53876-6163.jpg?semt=ais_hybrid"
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

const Body = () => {
  return (
    <div className="body">
      <div className="search-box">
        <input
          type="text"
          className="input-search"
          placeholder="Type to Search..."
        />
      </div>
      <div className="restaurant-container">
        {/* there is something called as props, okay? */}
        {/* props are nothing but arguments to a react component */}
        {resList.map((restaurant) => (
          <RestaurantCard
            key={restaurant.card.card.info.id}
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="App">
      {/* <h2>This is AppLayout Component</h2>
      <p>this is the topmost component</p> */}
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
