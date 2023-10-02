import Collapsible from "./Collapsible";
import RatingLogo from "../../public/images/star.png";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResturants from "../utils/useResturants";
import { useState } from "react";

const ResturantMenu = () => {
  const { resId } = useParams();

  const { resturantInfo, resturantMenu } = useResturants(resId);

  const [showCard, setShowCard] = useState(-1);

  if (!resturantMenu) return <Shimmer />;

  const { name, cuisines, areaName, sla, avgRatingString, totalRatingsString } =
    resturantInfo;

  return (
    <div className="resturant-menu">
      <div className="resturant-menu-header">
        <div className="menu-header flex justify-between p-5 mx-20 my-5 items-center shadow-lg rounded-xl">
          <div>
            <h1 className="font-semibold text-2xl py-1">{name}</h1>
            <h3 className="font-medium py-1">{cuisines.join(", ")}</h3>
            <h3 className="font-medium py-1">
              {areaName}, {sla.lastMileTravelString}
            </h3>
          </div>
          <div>
            <div className="rating-container flex justify-start mb-1">
              <img
                className="rating-img w-6 mr-2"
                src={RatingLogo}
                alt="rating-img"
              ></img>
              <h3 className="font-medium">{avgRatingString}</h3>
            </div>
            <h3 className="font-medium">{totalRatingsString}</h3>
          </div>
        </div>
      </div>
      <hr />
      <div className="menu-section mx-20 my-5">
        {resturantMenu.map((menuItem, index) => (
          <Collapsible
            key={index}
            menuItem={menuItem.card.card}
            showCard={index === showCard && true}
            setShowCard={(showCardState) =>
              showCardState ? setShowCard(index) : setShowCard(-1)
            }
          />
        ))}
      </div>
    </div>
  );
};

export default ResturantMenu;
