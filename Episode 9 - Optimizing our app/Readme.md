# Episode 9 - Optimizing our app

When we make our code modular by following the <b>Single Responsibility Principle</b> then our code becoms Reusable, Maintainable and Testable.

## Custom Hooks

- Components which has more than one responsibility is not that well optimized.
- For example, a component which display the UI with data, no need to know from where the data is coming from.
- So, we cna create a custom hook, which is a utility function which would help us to fetch the data from the API and give it to the required compponent.

### Creation of custom hook

It can be created as the normal function and export it.

```javascript
import { useEffect, useState } from "react";

const useInternetCheck = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });

    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });
  }, []);

  return onlineStatus;
};

export default useInternetCheck;
```

- I have created a custom hook which checks for the Internet connectivity and based on that it will update the UI.

Note: Always use the convention given by the React. It will help other developers to understand the code written.

## App chunking (OR) Code Splitting (OR) On-Demand Loading

- Other names for this process would be <b>Dynamic bundling, Lazy loading, Dynamic import.</b>
- In this process we will break down our application into smaller chunks.

### How to create bundle for different components?

- Consider a situation where we have <b>Grocery</b> component which is a seperate big component.
- Now when our main app loads, we don't want to load <b>Grocery</b> component.
- When a person goes to the <b>Grocery</b> component, then only the component should be loaded.

#### How can we do it?

- We can do this by lazy loading.

```javascript
const Grocery = lazy(() => import("./components/Grocery"));
```

- lazy() is the function given by React to load a component in a lazy fashion.
- It takes in a callback where we can specify a function called import() which takes path of the component as the parameter.
- import() function will return a promise.

#### There is a catch.

- Now if we run the code, it will give a component render error, as the component we are trying to load will be coming from a network call which would take some time.
- Hence we need something which can occupy the delay.
- So, we can use <b>Suspense</b> which is a component given by React.
- Takes in a property called <b>fallback</b> into which we can specify what to load when the actual component is yet to be rendered.

```javascript
<Suspense fallback={<h1>Loading grocery page...</h1>}>
  <Grocery />
</Suspense>
```
