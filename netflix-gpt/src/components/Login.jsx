import React, { useRef, useState } from "react";
import Header from "./Header";
import { NETFLIX_BACKGROUND_IMG, PROFILE_IMG } from "../utils/constants";
import { validateSignInForm, validateSignUpForm } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleForm = () => {
    setIsSignIn(!isSignIn);
  };

  const handleAuthentication = () => {
    setLoading(true);
    const emailValue = email.current.value;
    const passwordValue = password.current.value;

    if (isSignIn) {
      const message = validateSignInForm(emailValue, passwordValue);
      setErrorMessage(message);
      if (message) {
        setLoading(false);
        return;
      }

      //SignIn
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed in
          // const user = userCredential.user;
          setLoading(false);
        })
        .catch((error) => {
          // const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
          setLoading(false);
        });
    } else {
      const nameValue = name.current.value;
      const message = validateSignUpForm(emailValue, passwordValue, nameValue);
      setErrorMessage(message);
      if (message) {
        setLoading(false);
        return;
      }

      //Signup
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          updateProfile(auth.currentUser, {
            displayName: nameValue,
            photoURL: PROFILE_IMG,
          })
            .then(() => {
              // Profile updated!
              dispatch(
                addUser({
                  uid: auth.currentUser.uid,
                  email: auth.currentUser.email,
                  displayName: auth.currentUser.displayName,
                  photoURL: auth.currentUser.photoURL,
                })
              );
              setLoading(false);
            })
            .catch((error) => {
              const errorMessage = error.message;
              setErrorMessage(errorMessage);
              setLoading(false);
            });
        })
        .catch((error) => {
          // const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="fixed">
        <img
          className="h-screen md:h-full object-cover"
          src={NETFLIX_BACKGROUND_IMG}
          alt="netflix-bg-banner"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute mt-36 flex flex-col p-4 bg-black text-white mx-auto right-0 left-0 w-[90%] md:w-96"
      >
        <h1 className="font-semibold text-3xl p-4 m-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            className="p-4 m-4 bg-gray-800"
            type="text"
            name="name"
            id="name"
            placeholder="Full Name"
          />
        )}
        <input
          ref={email}
          className="p-4 m-4 bg-gray-800"
          type="email"
          name="email"
          id="email"
          placeholder="Email Address"
        />
        <input
          ref={password}
          className="p-4 m-4 bg-gray-800"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        <p className="text-red-700 p-4 font-semibold">{errorMessage}</p>
        <button
          className={`bg-[#E50914] text-white p-4 m-4 font-semibold text-md ${
            loading ? "cursor-not-allowed opacity-80" : ""
          }`}
          onClick={handleAuthentication}
          disabled={loading}
        >
          {loading ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 animate-spin mx-auto right-0 left-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
          ) : isSignIn ? (
            "Sign In"
          ) : (
            "Sign Up"
          )}
        </button>
        {isSignIn ? (
          <p className="p-4 m-4">
            <span className="text-gray-500">New to Netflix? </span>
            <span className="cursor-pointer" onClick={handleForm}>
              Sign up now
            </span>
          </p>
        ) : (
          <p className="p-4 m-4">
            <span className="text-gray-500">Already have an account? </span>
            <span className="cursor-pointer" onClick={handleForm}>
              Sign In now
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
