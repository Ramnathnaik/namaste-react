import React from "react";
import Header from "./Header";
import useNowPlaying from "../hooks/useNowPlaying";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopular from "../hooks/usePopular";
import useUpcoming from "../hooks/useUpcoming";
import useTopRated from "../hooks/useTopRated";
import { useSelector } from "react-redux";
import GPTSearchPage from "./GPTSearchPage";

const Browse = () => {
  useNowPlaying();
  usePopular();
  useUpcoming();
  useTopRated();

  const isGPTPage = useSelector((store) => store.gpt.isGPTPage);

  return (
    <div>
      <Header />
      {!isGPTPage ? (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      ) : (
        <GPTSearchPage />
      )}
    </div>
  );
};

export default Browse;
