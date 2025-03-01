console.log("App.js");

// the 3 parameters that createElement will accpet are {child element, properties (props for short), content of the child element}
const heading = React.createElement(
  "h1",
  { id: "root", xyz: "abc" }, //these are nothing but props, it receives the object and pass the props that needs to be set
  "render from React!!"
);

{
  /* <div id="parent">
    <div id="child">
        <h1 id="heading"></h1>
    </div>
</div> */
}

// React.createElement RETURNS AN OBJECT WHICH IS ON RENDERING CONVERTED INTO HTML CODE WHICH BROWSER CAN UNDERSTAND
const nestedStructure = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement(
      "h1",
      { id: "heading" },
      "i'm the h1 tag from nested structure!!"
    )
  )
);

// what if you want to make the 2 siblings like below??
{
  /* <div id="parent">
      <div id="child">
          <h1 id="heading"></h1>
          <h2 id="heading2"></h2>
      </div>
  </div> */
}
const secondNestedStructure = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement(
      "h1",
      { id: "heading" },
      "i'm the h1 tag from nested structure!!"
    ),
    React.createElement("h2", { id: "heading2" }, "i'm the second heading!!"),
  ])
);

console.log(nestedStructure);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(secondNestedStructure);
