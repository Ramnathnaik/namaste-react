import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    movies && (
      <div className="px-12 py-6">
        <h1 className="text-2xl font-semibold py-4 text-white">{title}</h1>
        <div className="flex overflow-x-scroll">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              posterPath={movie.poster_path}
              title={movie.title}
            />
          ))}
        </div>
      </div>
    )
  );
};

export default MovieList;
