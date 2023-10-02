import { useEffect, useState } from "react";
import { SWIGGY_RESTURANT_MENU_URL } from "./constants";

const useResturants = (resId) => {
  const [resturantMenu, setResturantMenu] = useState(null);
  const [resturantInfo, setResturantInfo] = useState(null);

  useEffect(() => {
    fetchResturantMenu();
  }, []);

  const fetchResturantMenu = async () => {
    const data = await fetch(SWIGGY_RESTURANT_MENU_URL + resId);
    const jsonData = await data.json();

    const resInfo = jsonData?.data?.cards?.[0]?.card?.card?.info;
    setResturantInfo(resInfo);

    let reqData =
      jsonData?.data?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    reqData = reqData.filter((resData) => {
      if (resData.card.card?.itemCards) return resData;
    });
    setResturantMenu(reqData);
  };

  return { resturantMenu, resturantInfo };
};

export default useResturants;
