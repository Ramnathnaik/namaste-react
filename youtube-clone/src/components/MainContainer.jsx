import React, { useEffect } from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useDispatch } from "react-redux";
import { openMenu } from "../utils/appSlice";

const MainContainer = () => {
  const dispatch = useDispatch();

  const openMenubar = () => {
    dispatch(openMenu());
  };

  useEffect(() => {
    openMenubar();
  }, []);

  return (
    <div className="col-span-10">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
