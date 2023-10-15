import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, TMDB_API } from "../utils/constants";
import { addPopular } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopular = () => {
  const dispatch = useDispatch();
  const popular = useSelector((store) => store.movies.popular);

  const getPopular = async () => {
    const data = await fetch(`${TMDB_API}/popular?page=1`, API_OPTIONS);
    const json = await data.json();
    dispatch(addPopular(json.results));
  };

  useEffect(() => {
    !popular && getPopular();
  }, []);
};

export default usePopular;
