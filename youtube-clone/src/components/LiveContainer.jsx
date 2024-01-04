import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { openMenu } from "../utils/appSlice";
import ButtonList from "./ButtonList";
import LiveVideoContainer from "./LiveVideoContainer";

const LiveContainer = () => {
  const dispatch = useDispatch();

  const openMenubar = () => {
    dispatch(openMenu());
  };

  useEffect(() => {
    openMenubar();
  }, []);

  return (
    <div className="col-span-10 dark:bg-black dark:text-white">
      <ButtonList />
      <LiveVideoContainer />
    </div>
  );
};

export default LiveContainer;
