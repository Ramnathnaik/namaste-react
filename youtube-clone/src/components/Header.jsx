import React, { useEffect, useRef, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { SEARCH_SUGGESTION_API, YOUTUBE_LOGO } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { addSearchCache } from "../utils/searchSlice";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [queryResults, setQueryResults] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache && searchCache.hasOwnProperty(query)) {
        setQueryResults(searchCache[query]);
      } else {
        searchQuery();
      }
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, [query]);

  const toggleMenubar = () => {
    dispatch(toggleMenu());
  };

  const searchQuery = async () => {
    const data = await fetch(SEARCH_SUGGESTION_API + query);
    const json = await data.json();
    setQueryResults(json[1]);
    dispatch(addSearchCache({ [query]: queryResults }));
    // console.log(queryResults);
  };

  const handleButtonClickSearch = () => {
    setShowSuggestions(false);
    navigate("/results?search_query=" + query);
  };

  return (
    <div className="flex justify-between items-center px-6 py-1 shadow-lg">
      <div className="flex items-center">
        <div onClick={toggleMenubar}>
          <MenuIcon className="cursor-pointer" />
        </div>
        <Link to="/">
          <img className="w-24" src={YOUTUBE_LOGO} alt="youtube-logo" />
        </Link>
      </div>
      <div className="flex flex-col">
        <div className="flex">
          <input
            className="px-4 py-2 border rounded-l-full w-96 border-t-gray-400 border-l-gray-400 border-b-gray-400"
            type="text"
            name="search"
            id="search"
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
          />
          <button
            className="px-4 py-2 border rounded-r-full border-t-gray-400 border-r-gray-400 border-b-gray-400 bg-gray-200"
            onClick={handleButtonClickSearch}
          >
            <SearchIcon />
          </button>
        </div>
        {showSuggestions && queryResults.length > 0 && (
          <div className="absolute mt-12 bg-white w-96 px-4 py-2 rounded-lg shadow-lg">
            <ul>
              {queryResults.map((result) => (
                <Link key={result} to={"/results?search_query=" + result}>
                  <li
                    className="px-2 py-1 hover:bg-gray-100 cursor-pointer"
                    onClick={() => setShowSuggestions(false)}
                  >
                    <SearchIcon /> &nbsp;&nbsp;{result}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div>
        <AccountCircleOutlinedIcon />
      </div>
    </div>
  );
};

export default Header;
