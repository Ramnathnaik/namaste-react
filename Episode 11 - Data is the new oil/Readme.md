# Episode 11 - Data is the new oil

## Higher order components

- A component or a function which takes a component and returns a component.
- It takes a component, enhances it. returns new component.
- We will build a feature to add a label for those resturants which has average rating greater than or equal to 4.5.

```jsx
export const withPromotedLabel = (ResturantCard) => {
  return (props) => {
    return (
      <div>
        <label
          htmlFor="highRating"
          className="relative z-[1] bg-black text-white py-[5px] px-[10px] top-[10px] right-[15px]"
        >
          Good rated
        </label>
        <ResturantCard {...props} />
      </div>
    );
  };
};
```

## Controlled and Un-Controlled components

- If a parent is controlling major state of the child, the child becomes <b>Controlled component.</b>
- If the major state is managed by the component itself, its an <b>Un-controlled component.</b>

- In our case, we can consider the Collasible component as the controlled component, as it is managed by ResturantMenu component.

[Lifting the state up](https://react.dev/learn/sharing-state-between-components#lifting-state-up-by-example)

## Props drilling

- Passing data between multiple components is tuff.
- React has one way data flow, i.e, <b>Top to Bottom.</b>

[Props Drilling](https://medium.com/analytics-vidhya/props-drilling-in-react-js-934120a4906b)

- One way to avoid props drilling is through Context API, which is anative React solution.

## React Context

- There might be some piece of information that needs to be accessed in a global context.
- For example, Logged in user data, Theme selected, etc.
- This can be handled using context.

### Creation of Context

- For creating context we needs to use <b>createContext()</b> method which is coming from React.

```javascript
import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "Guest",
});
```

### Usage of Context

- To use the context we need to use <b>useContext()</b> method provided by React which will take Context name as the parameter.

```javascript
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const { loggedInUser } = useContext(UserContext);
```

- If we want to use useContext inside class based component, it is not possible as <b>class based components does not support hooks.</b>
- There are 2 main ways to consume the context.

1. useContext()
2. Context.Consumer

- Context.Consumer can be used as below

```jsx
<UserContext.Consumer>
  {({ loggedInUser }) => (
    <h2 className="font-semibold text-xl text-gray-500 py-1">{loggedInUser}</h2>
  )}
</UserContext.Consumer>
```

### Setting the data using Context

- For setting the data, we need to use the Context.Provider.

```jsx
<UserContext.Provider value={{ loggedInUser: username, setUsername }}>
  <div className="root">
    <Header />
    <Outlet />
  </div>
</UserContext.Provider>
```

- We can even nest the context provider and set different values for different places or components.
- For modifying the context we can pass setState method as well.

<b>Note: We can change the context value even if the component is lazy loaded.</b>
