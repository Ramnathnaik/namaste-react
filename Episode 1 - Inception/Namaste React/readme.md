# Episode 01 - Inception

## Pointers covered

1. At first, we created a simple HTML page with h1 tag in it.

```html
<h1>Hello World from HTML</h1>
```

2. Created h1 tag using JavaScript

```javascript
const h1 = document.createElement("h1");
h1.innerHTML = "Hello World from JS";
const root1 = document.getElementById("root");
root1.appendChild(h1);
```

3. Created a h1 tag using React

- Add the cdn links of React:

```html
<script
  crossorigin
  src="https://unpkg.com/react@18/umd/react.development.js"
></script>
<script
  crossorigin
  src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
></script>
```

- Used the React and ReactDOM object to create a h1 tag

```javascript
// Creation of Header
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World by React"
);

// Creation of Complex Structure
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "H1 from child 1"),
    React.createElement("h2", {}, "H2 from child 2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "H1 from child 2"),
    React.createElement("h2", {}, "H2 from child 2"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
```
