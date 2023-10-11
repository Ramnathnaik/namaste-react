import { useDispatch } from "react-redux";
import { API_OPTIONS, TMDB_API } from "../utils/constants";
import { addPopular } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopular = () => {
  const dispatch = useDispatch();

  const getPopular = async () => {
    const data = await fetch(`${TMDB_API}/popular?page=1`, API_OPTIONS);
    const json = await data.json();
    dispatch(addPopular(json.results));
  };

  useEffect(() => {
    getPopular();
  }, []);
};

export default usePopular;
