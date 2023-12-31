import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, TMDB_API } from "../utils/constants";
import { addTopRated } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTopRated = () => {
  const dispatch = useDispatch();
  const topRated = useSelector((store) => store.movies.topRated);

  const getTopRated = async () => {
    const data = await fetch(`${TMDB_API}/top_rated?page=1`, API_OPTIONS);
    const json = await data.json();
    dispatch(addTopRated(json.results));
  };

  useEffect(() => {
    !topRated && getTopRated();
  }, []);
};

export default useTopRated;
