import React from "react";

import "../styles/style.css";

class UserClass extends React.Component {
  //we will receive the props through the constructor
  constructor(props) {
    //why use the below line??
    // becasue we call the parent class and then the parent class (React.Component)
    // will assing this.props otherwise it will be undefined
    super(props);

    // console.log(this.props.name + " constructor");

    // console.log("props(class-based-component):", props);

    // how do we create the state variable in class based components
    this.state = {
      count: 23,
      // how do we create multiple state variables??
      secondCount: 67,
      userInfo: {},
    };
  }

  async componentDidMount() {
    // console.log(this.props.name + " componentDidMount");
    const data = await fetch("https://api.github.com/users/anupam1209");
    const json = await data.json();

    // console.log(json);

    this.setState({ userInfo: json });
  }

  // there will be a function render()
  render() {
    const { name, company } = this.state.userInfo;
    //this render function will return JSX
    return (
      <>
        <div className="user-card">
          <p>
            <i>Name: {name}</i>
          </p>
          <img
            src="https://avatars.githubusercontent.com/u/54218987?v=4"
            alt="GitHub user avatar"
          />
          <p>
            <i>College: {company}</i>
          </p>
          <p>
            <i>Count: {this.state.count}</i>
          </p>
          <p>Second Count: {this.state.secondCount}</p>
          <button
            className="counter-button"
            onClick={() => {
              // for updating the state of a variable, you use something called as setState
              // this function will receive an object
              this.setState({
                count: this.state.count + 1,
              });
            }}
          >
            Counter Button
          </button>
        </div>
      </>
    );
  }
}

export default UserClass;
