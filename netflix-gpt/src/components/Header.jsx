import React, { useEffect } from "react";
import { NETFLIX_LOGO } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispath = useDispatch();

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

  return (
    <div
      className="bg-gradient-to-b from-black z-10 absolute w-full flex 
    justify-between items-center"
    >
      <img className="w-44 p-4 m-4" src={NETFLIX_LOGO} alt="netflix-logo" />
      {user && (
        <div className="p-4 m-4 flex self-baseline items-center">
          <h3 className="text-white font-semibold m-2">{user?.displayName}</h3>
          <img
            className="mr-2 w-14 rounded-lg border-2 border-solid border-black"
            src={user?.photoURL}
            alt="profile-img"
          />
          <button
            className="bg-red-700 p-2 m-2 font-semibold rounded-lg 
            text-white border-solid border-2 border-black"
            onClick={logout}
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
