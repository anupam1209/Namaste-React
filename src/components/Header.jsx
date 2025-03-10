import companyLogo from "../img/burger.png";

const Header = () => {
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
