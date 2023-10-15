import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black md:bg-gradient-to-b md:from-transparent md:to-black md:to-5% relative -my-0 md:-my-44">
      <MovieList title={"Now Playing"} movies={movies.nowPlaying} />
      <MovieList title={"Popular"} movies={movies.popular} />
      <MovieList title={"Upcoming"} movies={movies.upcoming} />
      <MovieList title={"Top Rated"} movies={movies.topRated} />
    </div>
  );
};

export default SecondaryContainer;
