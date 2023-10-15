import React, { useEffect, useState } from "react";
import { NETFLIX_LOGO } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import {
  addMovieSearchResults,
  addMovieTitles,
  switchGPTPage,
} from "../utils/gptSlice";
import { languageConstants } from "../utils/constants";
import { changeLanguage } from "../utils/appConfigSlice";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispath = useDispatch();
  const [panel, setPanel] = useState(false);

  const isGPTPage = useSelector((store) => store.gpt.isGPTPage);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispath(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispath(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const logout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
      });
  };

  const navigateToGPTPage = () => {
    dispath(switchGPTPage());
    dispath(addMovieSearchResults(null));
    dispath(addMovieTitles(null));
    setPanel(!panel);
  };

  const handleLanguageChange = (e) => {
    dispath(changeLanguage(e.target.value));
    setPanel(!panel);
  };

  return (
    <>
      <div
        className="bg-gradient-to-b from-black z-10 absolute w-full flex 
    justify-between items-center"
      >
        <img className="w-44 p-4 m-4" src={NETFLIX_LOGO} alt="netflix-logo" />
        {user && (
          <>
            <div className="md:hidden" onClick={() => setPanel(true)}>
              <MenuIcon className="text-white mr-4" />
            </div>
            <div className="hidden p-4 m-4 md:flex self-baseline items-center">
              <h3 className="text-white font-semibold m-2">
                {user?.displayName}
              </h3>
              {isGPTPage && (
                <select
                  name="language"
                  id="language"
                  className="bg-black px-4 py-2 text-white m-2"
                  onChange={(e) => handleLanguageChange(e)}
                >
                  {languageConstants.map((language) => (
                    <option key={language.code} value={language.code}>
                      {language.language}
                    </option>
                  ))}
                </select>
              )}
              <button
                className="bg-violet-700 p-2 m-2 font-semibold rounded-lg 
            text-white border-solid border-2 border-black"
                onClick={navigateToGPTPage}
              >
                {isGPTPage ? "Home Page" : "GPT Page"}
              </button>
              <img
                className="mr-2 w-14 rounded-lg border-2 border-solid border-black"
                src={user?.photoURL}
                alt="profile-img"
              />
              <button
                className="bg-[#E50914] p-2 m-2 font-semibold rounded-lg 
            text-white border-solid border-2 border-black"
                onClick={logout}
              >
                Sign out
              </button>
            </div>
          </>
        )}
      </div>
      {user && (
        <div
          className={
            panel
              ? "md:hidden w-screen h-screen bg-black absolute z-10"
              : "hidden"
          }
        >
          <div className="flex fixed justify-end mt-36 w-full pr-6">
            <div onClick={() => setPanel(false)}>
              <CloseIcon className="text-white text-3xl" />
            </div>
          </div>
          <br />
          <div className="flex flex-col pt-36 mx-6 mt-4">
            {isGPTPage && (
              <select
                name="language"
                id="language"
                className="bg-black px-4 py-2 text-white m-2"
                onChange={(e) => handleLanguageChange(e)}
              >
                {languageConstants.map((language) => (
                  <option key={language.code} value={language.code}>
                    {language.language}
                  </option>
                ))}
              </select>
            )}
            <button
              className="bg-violet-700 p-2 m-2 font-semibold rounded-lg 
            text-white border-solid border-2 border-black"
              onClick={navigateToGPTPage}
            >
              {isGPTPage ? "Home Page" : "GPT Page"}
            </button>
            <button
              className="bg-[#E50914] p-2 m-2 font-semibold rounded-lg 
            text-white border-solid border-2 border-black"
              onClick={logout}
            >
              Sign out
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
