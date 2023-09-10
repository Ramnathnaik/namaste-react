import ResturantCard from "./ResturantCard";
import { useEffect, useState } from "react";
import { SWIGGY_FOOD_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfResturants, setListOfResturants] = useState([]);
  const [filterBtnText, setFilterBtnText] = useState(
    "Filter top rated Resturants"
  );
  const [isAllResturantsSelected, setIsAllResturantsSelected] = useState(true);
  const [searchData, setSearchData] = useState("");
  const [filteredResturants, setFilteredResturants] = useState([]);

  useEffect(() => {
    fetchSwiggyData();
  }, []);

  const fetchSwiggyData = async () => {
    console.log("fetch");
    const data = await fetch(SWIGGY_FOOD_URL);
    const jsonData = await data.json();
    setFilteredResturants(
      jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
    setListOfResturants(
      jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
  };

  const updateCards = async () => {
    if (isAllResturantsSelected) {
      const filteredListOfResturants = listOfResturants.filter(
        (resturant) => resturant.info.avgRating > 4
      );
      setListOfResturants(filteredListOfResturants);
      setIsAllResturantsSelected(false);
      setFilterBtnText("All Resturants");
    } else {
      await fetchSwiggyData();
      setIsAllResturantsSelected(true);
      setFilterBtnText("Filter top rated Resturants");
    }
  };

  const filterResturants = (event) => {
    setSearchData(event.target.value);
    console.log(event.target.value);
    const filteredResturants = listOfResturants.filter((resturant) =>
      resturant.info.name.toLowerCase().includes(searchData.toLowerCase())
    );
    setFilteredResturants(filteredResturants);
  };

  return listOfResturants.length === 0 ? (
    <div>
      <div className="filter">
        <input
          type="text"
          className="search"
          value={searchData}
          placeholder="Search here"
          onChange={(event) => {
            setSearchData(event.target.value);
            console.log(event.target.value);
            const filteredResturants = listOfResturants.filter((resturant) =>
              resturant.info.name
                .toLowerCase()
                .includes(searchData.toLowerCase())
            );
            setFilteredResturants(filteredResturants);
          }}
        />
        <button className="filter-btn" onClick={updateCards}>
          {filterBtnText}
        </button>
      </div>
      <Shimmer />
    </div>
  ) : (
    <div className="body">
      <div className="filter">
        <input
          type="text"
          className="search"
          value={searchData}
          placeholder="Search here"
          onChange={(event) => {
            setSearchData(event.target.value);
            console.log(event.target.value);
            const filteredResturants = listOfResturants.filter((resturant) =>
              resturant.info.name
                .toLowerCase()
                .includes(searchData.toLowerCase())
            );
            setFilteredResturants(filteredResturants);
          }}
        />
        <button className="filter-btn" onClick={updateCards}>
          {filterBtnText}
        </button>
      </div>
      <div>
        <div className="resturant-container">
          {filteredResturants.map((resturant) => (
            <Link
              key={resturant.info.id}
              to={"/resturants/" + resturant.info.id}
              style={{ textDecoration: "none", color: "#000", height: "100%" }}
            >
              <ResturantCard resturantData={resturant.info} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
