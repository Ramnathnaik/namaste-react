import React from "react";
import ReactDOM from "react-dom/client";

// Creation of Header element using React
// React Element => Object => HTML Element
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World by React"
);

//JSX => React Element => Object => HTML Element
const jsxHeading = <h1 className="head">Namaste React from JSX</h1>;

//React Functional Component
const TitleComponent = () => {
  return <h1>Namaste React from Title Functional Component</h1>;
};

//Component Composition (OR) Component Nesting
const HeadingComponent = () => (
  <div>
    {jsxHeading}
    {TitleComponent()}
    <TitleComponent />
    <TitleComponent></TitleComponent>
    <h1>Namaste React from Component Composition</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
