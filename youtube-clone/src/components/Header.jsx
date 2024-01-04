import React, { useEffect, useRef, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import {
  DARK_YOUTUBE_LOGO,
  SEARCH_SUGGESTION_API,
  YOUTUBE_LOGO,
} from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode, toggleMenu } from "../utils/appSlice";
import { addSearchCache } from "../utils/searchSlice";
import { Link, useNavigate } from "react-router-dom";
import ToggleOffOutlinedIcon from "@mui/icons-material/ToggleOffOutlined";
import ToggleOnOutlinedIcon from "@mui/icons-material/ToggleOnOutlined";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [queryResults, setQueryResults] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const darkMode = useSelector((store) => store.app.darkMode);

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

  const switchDarkMode = () => {
    dispatch(toggleDarkMode());
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
    <div className="flex justify-between items-center px-6 py-1 shadow-lg dark:bg-black">
      <div className="flex items-center">
        <div onClick={toggleMenubar}>
          <MenuIcon className="cursor-pointer dark:text-white" />
        </div>
        <Link to="/">
          {darkMode ? (
            <img
              className="w-24 dark:bg-white"
              src={DARK_YOUTUBE_LOGO}
              alt="youtube-logo"
            />
          ) : (
            <img
              className="w-24 dark:bg-white"
              src={YOUTUBE_LOGO}
              alt="youtube-logo"
            />
          )}
        </Link>
      </div>
      <div className="flex flex-col">
        <div className="flex">
          <input
            className="px-4 py-2 border rounded-l-full w-96 border-t-gray-400 border-l-gray-400 border-b-gray-400 dark:bg-black dark:text-white dark:border-t-slate-600 dark:border-l-slate-600 dark:border-b-slate-600 dark:border-r-slate-600"
            type="text"
            name="search"
            id="search"
            placeholder="Search"
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
          />
          <button
            className="px-4 py-2 border rounded-r-full border-t-gray-400 border-r-gray-400 border-b-gray-400 bg-gray-200 dark:bg-black dark:border-t-slate-600 dark:border-r-slate-600 dark:border-b-slate-600 dark:border-l-slate-600"
            onClick={handleButtonClickSearch}
          >
            <SearchIcon className="dark:text-white" />
          </button>
        </div>
        {showSuggestions && queryResults.length > 0 && (
          <div className="absolute mt-12 bg-white w-96 px-4 py-2 rounded-lg shadow-lg dark:bg-black dark:text-white">
            <ul>
              {queryResults.map((result) => (
                <Link key={result} to={"/results?search_query=" + result}>
                  <li
                    className="px-2 py-1 hover:bg-gray-100 cursor-pointer dark:hover:bg-slate-800"
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
      <div className="text-3xl flex items-center justify-center">
        {!darkMode ? (
          <div onClick={switchDarkMode}>
            <ToggleOffOutlinedIcon className="hover:cursor-pointer dark:text-white" />
          </div>
        ) : (
          <div onClick={switchDarkMode}>
            <ToggleOnOutlinedIcon className="hover:cursor-pointer dark:text-white" />
          </div>
        )}
        &nbsp;&nbsp;
        <AccountCircleOutlinedIcon className="hover:cursor-pointer dark:text-white" />
      </div>
    </div>
  );
};

export default Header;
