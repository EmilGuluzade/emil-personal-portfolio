import React from "react";
import "./Header.css";
import  logo  from "../../../assets/images/e.logo.png";
const Header = () => {
  return (
    <header  className="header">
      <div className="container">
        <img
          src={logo}
          alt=""
        />
        <ul className="navbar">
          <li>
            <a href="#home">HOME</a>
          </li>
          <li>
            <a href="#about">ABOUT US</a>
          </li>
          <li>
            <a href="#service">SERVICE</a>
          </li>
          <li>
            <a href="#projects">PROJECTS</a>
          </li>
          <li>
            <a href="#blog">BLOG</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
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
