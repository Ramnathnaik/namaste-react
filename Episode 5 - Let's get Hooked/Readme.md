# Episode 5 - Let's get Hooked

At first, we will restructure our project.

- It does not matter if you use js or jsx extension. (I personally prefer jsx as emmet abrivation for HTML is not working for js)

## Export and Import

There are two ways to export and import

1. Named
2. Default

3. a. Named Export

```javascript
export const LOGO_URL =
  "https://th.bing.com/th/id/OIP.Wuvdo65dj7ghMoYmCtCCGgHaHa?pid=ImgDet&rs=1";
```

1. b. Named Import

```javascript
import { LOGO_URL } from "../utils/constants";
```

2. a. Default Export

```javascript
export default Body;
```

2. b. Default Import

```javascript
import Body from "./components/Body";
```

## React Hooks

- React Hook is a normal Javascript utility function given by React

There are mainly 2 important React Hooks.

1. useState
2. useEffect

### useState()

- It makes a normal Javascript variable as super charged variable.

### Creation of useState Hook

- useState will keep the data and UI insync.
- Whevener a state variable updates React re-render the component.

```javascript
const [listOfResturants, setListOfResturants] = useState(resturantsData);
```

Note: React is best at DOM Manipulation.

## How React Works?

- React uses a Reconcilation Algorithm (React Fiber).
- It was introduced in React 16.
- The Reconcilation Algorithm uses a Diff Algorithm behind the scene.
- Before going to the Diff algorithm, let's understand Virtual DOM.

### Virtual DOM

- Virtual DOM is a representation of the actual DOM.
- It is nothing but a Javascript object.

### Diff Algorithm

- It find the difference between previous and current Virtual DOM.
- As finding out difference between actual DOM is difficult, React uses Diff Algorithm to find out difference between Virtual DOM as it is an object.

<b>Must read article: https://github.com/acdlite/react-fiber-architecture</b>
