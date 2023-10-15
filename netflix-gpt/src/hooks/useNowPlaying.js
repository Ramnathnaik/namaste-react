import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, TMDB_API } from "../utils/constants";
import { addMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlaying = () => {
  const dispatch = useDispatch();
  const nowPlaying = useSelector((store) => store.movies.nowPlaying);

  const getNowPlaying = async () => {
    const data = await fetch(`${TMDB_API}/now_playing?page=1`, API_OPTIONS);
    const json = await data.json();
    dispatch(addMovies(json.results));
  };

  useEffect(() => {
    !nowPlaying && getNowPlaying();
  }, []);
};

export default useNowPlaying;
