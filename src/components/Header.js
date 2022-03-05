import React from "react";
import logo from "../img/logo.png";

const Header = () => {
  return (
    <header className="center">
      <img src={logo} alt="logo" />
      <div className="company-name">
        <p>BookYourShow</p>
      </div>
    </header>
  );
};

export default Header;
