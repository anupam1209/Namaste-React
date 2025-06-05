import User from "./User";
import UserClass from "./UserClass";

import React from "react";

// class based component for the About component

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }

  componentDidMount() {
    console.log("parent componentDidMount");
  }

  render() {
    console.log("parent render function");
    return (
      <>
        <div className="about-section">
          <h1>About Us</h1>
          <p>Here we will have information of about website</p>
          <p>Functional Based Component ⬇️</p>
          <User course={"M.Tech"} />

          <p>Class Based Component ⬇️</p>
          {/* we will pass the props in the same way we did for the functional based components */}
          <UserClass researchArea={"Quantum Computing"} name={"first child"} />
          <UserClass researchArea={"Quantum Computing"} name={"second child"} />
        </div>
      </>
    );
  }
}

// const About = () => {
//   return (
//     <>
//       <div className="about-section">
//         <h1>About Us</h1>
//         <p>Here we will have information of about website</p>
//         <p>Functional Based Component ⬇️</p>
//         <User course={"M.Tech"} />

//         <p>Class Based Component ⬇️</p>
//         {/* we will pass the props in the same way we did for the functional based components */}
//         <UserClass researchArea={"Quantum Computing"} />
//       </div>
//     </>
//   );
// };

export default About;
