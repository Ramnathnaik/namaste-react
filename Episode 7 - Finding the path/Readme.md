# Episode 7 - Finding the path

## Important things about useEffect()

1. Everytime when the component renders useEffect will be called.
2. Dependency array will change the behaviour of useEffect().
3. Dependency array is not mandatory.

### There are three cases which can happen while using useEffect()

1. If no dependency array is present, useEffect() will be called on every render of the component.

```javascript
useEffect(() => console.log(""));
```

2. If dependency array is empty, useEffect() will be called only once for the initial render cycle.

```jsx
useEffect(() => console.log(""), []);
```

3. If dependency array has some dependencies in it, useEffect() will be called everytime the dependency changes or modified.

```jsx
useEffect(() => console.log(""), [btnName]);
```

## Best practices of using useState()

1. Always create useState() hook inside functional component (otherwise React will throw an error).
2. Always create the useState() hook at the top of the component.
3. Never create useState() hook inside if condition, for loops as well as functions, as it can create inconsistency in the program.

## Routes

1. We need React ROuter DOM for routing.

```bash
npm install react-router-dom
```

2. Whenever we need the routes, we need to create route configuration in app.js.

### Steps to create and setup the routes

1. Import createBrowserRouter from react-router-dom.

```javascript
import { createBrowserRouter } from "react-router-dom";
```

2. Configure routes

```javascript
const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);
```

2. 1. For invalid routes we can provide errorElement.
3. 2. errorElement is just another component.
4. 3. We can use useRouteError hook to get more info about the invalid route and build the page accordingly.

```jsx
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="error-div">
      <h1>{error.status}</h1>
      <h1>Error Found</h1>
      <p>{error.data}</p>
    </div>
  );
};
```

3. Import RouterProvider from react-router-dom and render it onto the root. Set the router attribute to appRoute.

```javascript
import { RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute} />);
```

Read: [React Router DOM Documentation](https://reactrouter.com/en/main)

Note: rafce => Creates React component and exports (in VS Code)

## Rendering the children component

- To render the children component according to the path we need to make the following configuration.

1. Setup the children component routes.

```jsx
const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/resturants/:resId",
        element: <ResturantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
```

2. Import Outlet from React Router DOM and use it where the children needs to be rendered.

```javascript
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="root">
      <Header />
      <Outlet />
    </div>
  );
};
```

## Routing to the new page

1. We should never use <b>anchor</b> tag to go the new page, as it will refresh or render the whole page.
2. Instead, we can use <b>Link</b> tag which is coming from React Router DOM.

```jsx
<Link to={"/"} style={{ textDecoration: "none", color: "#000" }}>
  Home
</Link>
```

3. Link tag will not refresh or render the whole page.

> Note: React is a single page application.

## Thing to know about web application

- There are 2 types of routing we can have in our web application.

1. <b>Client side routing: </b> The whole application is loaded onto the browser and rendered whenever required.
2. <b>Server side routing: </b>The network calls are made to fetch the pages/HTML when requested for, referesh the whole page to render.

## Dynamic Routing

- To make a path dynamic, use as below:

```javascript
{
    path: "/resturants/:resId",
    element: <ResturantMenu />,
}
```

- Here the resId is a dynamic data which is getting passes to the URL.
- To use the params, we cna use a hook called <b>useParams</b> coming from "react-router-dom".

```javascript
import { useParams } from "react-router-dom";

const { resId } = useParams();
```
