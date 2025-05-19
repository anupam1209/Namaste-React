import { ERROR_IMAGE_URL } from "../constants/constants";

const Error = () => {
  return (
    <>
      <div>
        <h1>OOPS!!!</h1>
        <h2>Something went wrong!!</h2>
        <img src={ERROR_IMAGE_URL} alt="error image" />
      </div>
    </>
  );
};

export default Error;
