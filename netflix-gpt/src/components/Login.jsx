import React, { useRef, useState } from "react";
import Header from "./Header";
import { NETFLIX_BACKGROUND_IMG } from "../utils/constants";
import { validateSignInForm, validateSignUpForm } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleForm = () => {
    setIsSignIn(!isSignIn);
  };

  const handleAuthentication = () => {
    const emailValue = email.current.value;
    const passwordValue = password.current.value;

    if (isSignIn) {
      const message = validateSignInForm(emailValue, passwordValue);
      setErrorMessage(message);
      if (message) return;

      //SignIn
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    } else {
      const nameValue = name.current.value;
      const message = validateSignUpForm(emailValue, passwordValue, nameValue);
      setErrorMessage(message);
      if (message) return;

      //Signup
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={NETFLIX_BACKGROUND_IMG} alt="netflix-bg-banner" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute mt-36 flex flex-col p-4 bg-black text-white mx-auto right-0 left-0 w-96"
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
          className="bg-red-700 p-4 m-4 font-semibold text-md"
          onClick={handleAuthentication}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
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
