import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <>
      <div className="about-section">
        <h1>About Us</h1>
        <p>Here we will have information of about website</p>

        <User course={"M.Tech"} />

        {/* we will pass the props in the same way we did for the functional based components */}
        <UserClass researchArea={"Quantum Computing"} />
      </div>
    </>
  );
};

export default About;
