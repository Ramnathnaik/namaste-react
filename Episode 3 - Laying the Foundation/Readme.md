# Episode 03 - Laying the Foundation

Add the script to start the project

1. "start": "parcel index.html" ====> dev
2. "build": "parcel build index.html" ====> prod

Now to start the project we can use

- npm run start (OR) npm start
- npm run build

Note: <b>start</b> is the reserved keyword

React element is just an object. It gets converted into HTML Element by ReactDOM.

## JSX

1. It's <b>not</b> HTML inside Javascript.
2. It has HTML <b>like</b> syntax.

### Creating element using React

```javascript
const heading = React.createElement("h1", { id: "heading" }, "Namaste React");
```

### Creating element using JSX

```jsx
const jsxHeading = <h1 id="heading">Namaste React</h1>;
```

- Code gets <b>transpiled</b> before going to browser.
- Transpilation is done by <b>babel</b> which is handled by <b>parcel</b>

Note: If we need to add an attribute to JSX element, it follows camel case.

### Single line and Multi-line JSX

- If we have multi-line JSX than add it inside brackets ()

## Everything in React is a component

There are 2 types of components:

1. Class based component (OLD)
2. Functional based component (NEW)

## React Functional Component

- It is a normal JavaScript function which returns some JSX.
- The naming convention should always start from Capital Letter

```javascript
const TitleComponent = () => {
  return <h1>Namaste React from Title Functional Component</h1>;
};
```

### Component Composition (OR) Component Nesting

- We can nest a React component into another React component

```javascript
const HeadingComponent = () => (
  <div>
    <TitleComponent />
    <h1>Namaste React from Component Composition</h1>
  </div>
);
```

Note: Use Angular brackets (< ComponentName />) to render React Component

- If we write anything inside {} of JSX than it runs as a normal Javascript code.

- If you want to render React Element inside JSX than you can do the following:

```javascript
//JSX => React Element
const jsxHeading = <h1 className="head">Namaste React from JSX</h1>;

//Any Javascript
const num = 10;

//React Functional Component
const HeadingComponent = () => (
  <div>
    {jsxHeading}
    {num}
  </div>
);
```

Note: JSX will sanitize the data which comes inside it to avoid any cross-site scripting attack.

- We have 3 interesting way to call a React element.

```javascript
const HeadingComponent = () => (
  <div>
    1. {TitleComponent()}
    2. <TitleComponent />
    3. <TitleComponent></TitleComponent>
  </div>
);
```
