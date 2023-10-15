import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMovieSuggestion = () => {
  const { movieSearchResults, movieTitles } = useSelector((store) => store.gpt);

  return movieSearchResults ? (
    <div className="bg-black w-[90%] absolute mt-56 mx-auto right-0 left-0">
      {movieTitles.map((movie, index) => (
        <MovieList
          key={movie}
          title={movie}
          movies={movieSearchResults[index]}
        />
      ))}
    </div>
  ) : null;
};

export default GPTMovieSuggestion;
