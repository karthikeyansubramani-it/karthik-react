/* Element creation in html way
<div id="parent">
    <div id="child1">
        <h1>I am an h1 tag</h1>
        <h2> I am an h2 tag</h2>
    </div>
     <div id="child2">
        <h1>I am an h1 tag</h1>
        <h2> I am an h2 tag</h2>
    </div>
</div> */

//Next level React element code for nested element creation - for single child
/* const parent = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, React.createElement("h1", {}, "I am an h1 tag")))
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); */

//Next level React element code for nested element creation - for children/siblings- with 2 child

import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  {
    id: "parent"
  },
  [
    React.createElement(
      "div",
      {
        id: "child1",
        key: "child1",
        
      },
      [
        React.createElement("h1", {key:"child1h1"}, "I am an h1 tag"),
        React.createElement("h2", {key:"child1h2"}, "I am an h2 tag"),
      ]
    ),
    React.createElement(
      "div",
      {
        id: "child2",
        key: "child2",
      },
      [
        React.createElement("h1", {key:"child2h1"}, "I am an h1 tag"),
        React.createElement("h2", {key:"child2h2"}, "I am an h2 tag"),
      ]
    ),
  ]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
console.log(parent);

//Next level React element code for nested element creation - for children/siblings
/* const parent = React.createElement(
    "div",
    {
      id: "parent",
    },
    React.createElement(
      "div",
      {
        id: "child",
      },
      [
        React.createElement("h1", {}, "I am an h1 tag"),
        React.createElement("h2", {}, "I am an h2 tag")
      ]
    )
  );
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(parent);
  console.log(parent);
   */

//First React element code
/* const heading = React.createElement(
    "h1", 
    {id:"heading", xyz:"abc"}, 
    "Hello World React!"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
 */
