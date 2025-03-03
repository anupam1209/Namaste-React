import React from "react";
import ReactDOM from "react-dom/client";

// react element
//  Q. what is a react element??
//  A. it is equivalent to DOM element but it is an object

// below is a react element
const heading = React.createElement(
  "h1",
  {
    id: "heading",
  },
  "Namaste Anupam!!!🙏🏻"
);

//JSX
//JSX => Babel transpiles it to React.createElement => ReactElement (JS Object) => HTMLElement (render)
const jsxHeading = (
  <div className="parent">
    <h1 className="heading">This is JSX heading😍</h1>
  </div>
);

// const reactElement = (
//   <>
//     <h2>this is a test react element</h2>
//   </>
// );

const newReactElement = (
  <div>
    React element👇🏻
    <div class="reactElement">
      <p>line 1</p>
      <p>line 2</p>
      {jsxHeading} {/* putting the ReactElement into the ReactElement */}
    </div>
  </div>
);

console.log(newReactElement);

const title = function () {
  return (
    <>
      <h2>this is a normal function and not arrow function</h2>
    </>
  );
};

// below is a functional component
const Title = () => {
  return (
    <>
      {" "}
      {/* <HeadingComponent /> */}{" "}
      {/* DON'T DO THIS, YOUR BROWSER WILL GO INTO INFINITE LOOP */}
      <h1>This is titleࠈ</h1>
    </>
  );
};

// React Component
// 1. Class based component (old way)
// 2. Functional components (new way)
const HeadingComponent = () => {
  return (
    <>
      <Title />
      {Title()}{" "}
      {/* you can also do this, as Functional Component is nothing but a simple JavaScript function, right?? */}
      {newReactElement}{" "}
      {/* at the end newReactElement is a javascript object, right? */}
      <h1>This is a Heading Component!!🥹 </h1>
    </>
  );
};

// we now have to create the root for the React using ReactDOM

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
