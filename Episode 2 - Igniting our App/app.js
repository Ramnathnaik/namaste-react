import React from "react";
import ReactDOM from "react-dom/client";

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
