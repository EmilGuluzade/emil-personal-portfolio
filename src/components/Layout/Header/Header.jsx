import React from "react";
import "./Header.css";
import  logo  from "../../../assets/images/e.logo.png";
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <img
          src={logo}
          alt=""
        />
        <ul className="navbar">
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/">ABOUT US</a>
          </li>
          <li>
            <a href="/">SERVICE</a>
          </li>
          <li>
            <a href="/">PROJECTS</a>
          </li>
          <li>
            <a href="/">BLOG</a>
          </li>
          <li>
            <a href="/">CONTACT</a>
          </li>
        </ul>
        <div className="menu">
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
    </header>
  );
};

export default Header;
