import React from "react";

class UserClass extends React.Component {
  //we will receive the props through the constructor
  constructor(props) {
    //why use the below line??
    // becasue we call the parent class and then the parent class (React.Component)
    // will assing this.props otherwise it will be undefined
    super(props);

    console.log("props(class-based-component):", props);
    
  }

  // there will be a function render()
  render() {
    const { researchArea } = this.props;
    //this render function will return JSX
    return (
      <>
        <div className="user-card">
          <h5>Class Based Components⬇️</h5>
          <p>
            <i>Name: Anupam Prakash</i>
          </p>
          <p>
            <i>College: NITK</i>
          </p>
          <p>
            <i>Research Area: {researchArea}</i>
          </p>
        </div>
      </>
    );
  }
}

export default UserClass;
