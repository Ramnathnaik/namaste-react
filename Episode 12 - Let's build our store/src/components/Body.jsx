import ResturantCard, { withPromotedLabel } from "./ResturantCard";
import { useEffect, useState } from "react";
import { SWIGGY_FOOD_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useInternetCheck from "../utils/useInternetCheck";

const Body = () => {
  const [listOfResturants, setListOfResturants] = useState([]);
  const [filterBtnText, setFilterBtnText] = useState(
    "Filter top rated Resturants"
  );
  const [isAllResturantsSelected, setIsAllResturantsSelected] = useState(true);
  const [searchData, setSearchData] = useState("");
  const [filteredResturants, setFilteredResturants] = useState([]);

  const onlineStatus = useInternetCheck();

  useEffect(() => {
    fetchSwiggyData();
  }, []);

  const fetchSwiggyData = async () => {
    console.log("fetch");
    const data = await fetch(SWIGGY_FOOD_URL);
    const jsonData = await data.json();
    console.log(
      jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
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

  const ResturantCardGoodRating = withPromotedLabel(ResturantCard);

  if (!onlineStatus)
    return (
      <h1>
        Looks like you're offline!
        <br />
        Please check the Internet connection.
      </h1>
    );

  return listOfResturants.length === 0 ? (
    <div className="px-4 mx-8 my-4">
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
        <button
          className="filter-btn rounded-full bg-[#48966E] shadow-lg mx-4 px-5 py-2 text-white font-semibold hover:shadow-xl"
          onClick={updateCards}
        >
          {filterBtnText}
        </button>
      </div>
      <Shimmer />
    </div>
  ) : (
    <div className="body">
      <div className="filter px-4 mx-8 my-4">
        <input
          type="text"
          className="search rounded-full shadow-lg mx-4 px-5 py-2 "
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
        <button
          className="filter-btn rounded-full bg-[#48966E] shadow-lg mx-4 px-5 py-2 text-white font-semibold hover:shadow-xl"
          onClick={updateCards}
        >
          {filterBtnText}
        </button>
      </div>
      <div>
        <div className="resturant-container flex flex-wrap justify-between my-2 mx-14">
          {filteredResturants.map((resturant) => (
            <Link
              className=" p-4 m-6 w-[300px] border-solid border-gray-400 shadow-lg hover:shadow-2xl rounded-xl"
              key={resturant.info.id}
              to={"/resturants/" + resturant.info.id}
              style={{ textDecoration: "none", color: "#000" }}
            >
              {+resturant.info.avgRating >= 4.5 ? (
                <ResturantCardGoodRating resturantData={resturant.info} />
              ) : (
                <ResturantCard resturantData={resturant.info} />
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
