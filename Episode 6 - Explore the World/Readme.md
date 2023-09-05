# Episode 6 - Explore the World

There are mainly 2 types of architecture.

1. Monilithic
2. Microservices

- Microservices architecture follows mainly 2 main principles.

1. Separation of Concerns.
2. Single Responsibility Principle.

## Fetching Data from Backend or API

- There are mainly 2 ways to fetch data from API.

1. As soon as the page loads, fetch the data first, then render the UI.
2. As soon as the page loads, render the UI, fetch the data, rerender the UI.

- Second approach is a better approach.
- We can implement the second approach using useEffect hook of React.

## useEffect()

- It takes in 2 arguments.

1. A callback function which will be called as soon as the page renders.
2. List of dependencies.

```javascript
useEffect(() => {
  fetchSwiggyData();
}, []);
```

Note: For fetching the data from API we can use <b>fetch()</b> method which is a browser provided API.

## Shimmer UI

- It's a skeleton UI which is used to show the loading when the API is taking time.
