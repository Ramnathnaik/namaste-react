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
