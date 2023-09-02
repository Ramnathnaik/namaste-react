import React from "react";
import ReactDOM from "react-dom/client";
import resturantsData from "./data.json";
import RatingLogo from "./public/images/star.png";

/**
 * AppLayout
 *  - Header
 *      - Logo
 *      - NavItems
 *  - Body
 *      - ResturantContainer
 *          - ResturantCard
 *  - Footer
 *      - Copyright
 *      - Links
 *      - Address
 *      - Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://th.bing.com/th/id/OIP.Wuvdo65dj7ghMoYmCtCCGgHaHa?pid=ImgDet&rs=1"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const ResturantCard = (props) => {
  const { resturantData } = props;
  const { name, cloudinaryImageId, cuisines, avgRating, areaName } =
    resturantData;

  return (
    <div className="resturant-card">
      <img
        className="food-img"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <div className="rating-container">
        <img className="rating-img" src={RatingLogo} alt="rating-img"></img>
        <h3>{avgRating}</h3>
      </div>
      <p>{cuisines.join(", ")}</p>
      <p>{areaName}</p>
    </div>
  );
};

const ResturantContainer = () => {
  return (
    <div className="resturant-container">
      {resturantsData.map((resturant) => (
        <ResturantCard key={resturant.info.id} resturantData={resturant.info} />
      ))}
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input type="search" />
      </div>
      <div>
        <ResturantContainer />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="root">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
