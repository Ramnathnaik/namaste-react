# Episode 14 - NetflixGPT - The Beginning

## What we will cover

1. Authentication
2. Form Handling
3. Use ChatGPT API

- Let's create a React app using create-react-app (CRA)

```bash
npx create-react-app netflix-gpt
```

- We will setup TailwindCSS (Follow the guide from the Tailwind website).

## Features we are going to cover

- Browse (After Authentication)

  - Header
  - Main Movie
    - Trailer in the Background
    - Title & Description
  - Movie suggestions
    - Movie List \* N

- Login/Signup

  - Sign In/Signup form
  - redirect to the browse page

- NetflixGPT
  - Search bar
  - Movie suggestions

## useRef() Hook

- useRef() hook is used to get the reference of a element present in a component.

```jsx
import { useRef } from "react";

const email = useRef(null); //Intialization

const nameValue = name.current.value; //Get current value

const app = (
  <input
    ref={email} //referring to the element
    className="p-4 m-4 bg-gray-800"
    type="email"
    name="email"
    id="email"
    placeholder="Email Address"
  />
);
```

## Authentication with Firebase

1. Setup a firebase account.
2. Create a project in firebase.
3. Register the app.
4. Add firebase SDK

- npm install firebase
- Add firebase.js config file (Provided by firebase)

5. Install firebase CLI

- npm install -g firebase-tools

6. Deploy to firebase hosting

- firebase login
- firebase init
- npm run build
- firebase deploy

7. Enable Authenctication from firebase.
8. Setup the Sign up and Sign In APIs using firebase docs.
9. Subscribing to the onAuthStateChange() to check whether signed in or not.

## Navigating through code

- We can use useNavigate() hook to navigate from one component to another.

```javascript
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();
navigate("/browse");
```

# Episode 15 - NetflixGPT - Building the core

- We need to unsubscribe to the onAuthStateChange() event in the useEffect().
- We will be using TMDB API for getting the movies details

## TMDB API

- Create an account in TMDB.
- Create an API key.
- Use the relavent APIs.

## React.StrictMode

- The network call will happen twice in this mode.
- This happens only in dev.
- React does this to find the inconsistancy in our project.

## Build the relavent components

- Use the redux toolkit for state management.

# Episode 16 - NetflixGPT - Wrapping up

## Build the GPT Search page

- Use Open AI API key to build the search.

Note: <></> this is react fragment.

## Build multiple language pages

## Add GPT Features to the app

Note: For using env we need to add <b>REACT*APP*</b> for env variables.

## Understanding memoization

- If the data is already present and it can be used, we should not make API call to fetch the data again.

## Making the app responsive using tailwind

- By default all the styling will be applied to mobile devices.
- If we want to make it tab and desktop, add:
  - sm: -> For Tab
  - md: -> For Desktop
