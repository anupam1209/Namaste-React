const User = (props) => {
  console.log(props);
  const { course } = props;
  return (
    <>
      <div className="user-card">
        <h5>Function Based Components⬇️</h5>
        <p>Name: Anupam Prakash</p>
        <p>College: NITK</p>
        <p>Course: {course}</p>
      </div>
    </>
  );
};

export default User;
