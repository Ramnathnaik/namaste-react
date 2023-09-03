import ResturantCard from "./ResturantCard";
import resturantsData from "../utils/data.json";
import { useState } from "react";

const Body = () => {
  const [listOfResturants, setListOfResturants] = useState(resturantsData);
  const [filterBtnText, setFilterBtnText] = useState(
    "Filter top rated Resturants"
  );
  const [isAllResturantsSelected, setIsAllResturantsSelected] = useState(true);

  const updateCards = () => {
    if (isAllResturantsSelected) {
      const filteredListOfResturants = listOfResturants.filter(
        (resturant) => resturant.info.avgRating > 4
      );
      setListOfResturants(filteredListOfResturants);
      setIsAllResturantsSelected(false);
      setFilterBtnText("All Resturants");
      console.log(isAllResturantsSelected);
    } else {
      setListOfResturants(resturantsData);
      setIsAllResturantsSelected(true);
      setFilterBtnText("Filter top rated Resturants");
      console.log(isAllResturantsSelected);
    }
  };

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={updateCards}>
          {filterBtnText}
        </button>
      </div>
      <div>
        <div className="resturant-container">
          {listOfResturants.map((resturant) => (
            <ResturantCard
              key={resturant.info.id}
              resturantData={resturant.info}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
