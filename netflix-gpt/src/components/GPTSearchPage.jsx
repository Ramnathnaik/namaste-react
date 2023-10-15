import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestion from "./GPTMovieSuggestion";
import { NETFLIX_BACKGROUND_IMG } from "../utils/constants";

const GPTSearchPage = () => {
  return (
    <div>
      <div className="fixed">
        <img
          className="h-screen md:h-full object-cover"
          src={NETFLIX_BACKGROUND_IMG}
          alt="netflix-bg-banner"
        />
      </div>
      <GPTSearchBar />
      <GPTMovieSuggestion />
    </div>
  );
};

export default GPTSearchPage;
