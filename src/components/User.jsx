import { useState } from "react";

const User = (props) => {
  // how to create a state variable in functinal based component
  const [count, setCount] = useState(64);

  // console.log(props);
  const { course } = props;
  return (
    <>
      <div className="user-card">
        <p>Name: Anupam Prakash</p>
        <p>College: NITK</p>
        <p>Course: {course}</p>
        <p>Count: {count}</p>
        <button
          className="counter-button"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          FBC button
        </button>
      </div>
    </>
  );
};

export default User;
