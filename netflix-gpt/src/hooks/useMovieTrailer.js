import { useDispatch } from "react-redux";
import { API_OPTIONS, TMDB_API } from "../utils/constants";
import { useEffect } from "react";
import { addTrailer } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    const data = await fetch(`${TMDB_API}/${movieId}/videos`, API_OPTIONS);
    const json = await data.json();

    const movieVideos = json.results;
    const trailers = movieVideos.filter((movie) => movie.type === "Trailer");
    const trailer = trailers.length ? trailers[0] : movieVideos[0];

    dispatch(addTrailer(trailer));
  };

  useEffect(() => {
    getMovieVideos(movieId);
  }, []);
};

export default useMovieTrailer;
