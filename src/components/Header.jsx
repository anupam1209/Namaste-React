import companyLogo from "../img/logo.png";
import "../styles/style.css";

import { useState } from "react";
import { Link } from "react-router-dom";

import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo">
        <img src={companyLogo} alt="app logo" />
        <span className="company-name">Swiggato</span>
      </div>
      <div>
        <ul>
          <li>
            <p className="online-status-message">
              You're {onlineStatus ? "online 🟢" : "offline 🔴"}
            </p>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/grocery">
              Grocery
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/about">
              About
            </Link>
          </li>
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
