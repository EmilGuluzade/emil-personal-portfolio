import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <img
          src="https://mail.google.com/mail/u/0?ui=2&ik=3d27891a50&attid=0.2&permmsgid=msg-f:1798040989489958299&th=18f3ecc0e6240d9b&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ83EEHTbnu1WnTadc3OQp-3SoYwEM-lYFBYnnm40naMXl28dWkntKcJQYkvfkkio7Qc72YnyBAiIHNNoobOwXJ7JHUsOiJCQSNCFpOFrfvZyZ7xn5g1fIlrPdg&disp=emb&realattid=ii_lvqr70vv1"
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
