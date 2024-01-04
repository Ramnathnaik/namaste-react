import React, { useEffect } from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useDispatch } from "react-redux";
import { addCategoryId, openMenu } from "../utils/appSlice";

const MainContainer = () => {
  const dispatch = useDispatch();

  const openMenubar = () => {
    dispatch(openMenu());
    dispatch(addCategoryId("-1"));
  };

  useEffect(() => {
    openMenubar();
  }, []);

  return (
    <div className="col-span-10 dark:bg-black dark:text-white">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
