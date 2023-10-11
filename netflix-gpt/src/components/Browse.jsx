import React from "react";
import Header from "./Header";
import useNowPlaying from "../hooks/useNowPlaying";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopular from "../hooks/usePopular";
import useUpcoming from "../hooks/useUpcoming";
import useTopRated from "../hooks/useTopRated";

const Browse = () => {
  useNowPlaying();
  usePopular();
  useUpcoming();
  useTopRated();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
