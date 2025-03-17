import companyLogo from "../img/burger.png";
import { useState } from "react";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="header">
      <div className="logo">
        <img src={companyLogo} alt="app logo" />
        <span className="company-name">Namaste Food Inc.</span>
      </div>
      <div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Cart</li>
          <li>
            <button
              className="login-btn"
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
