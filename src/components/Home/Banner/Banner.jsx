import React from "react";
import "./Banner.css";
import Button from "../../Utils/Button";

const Banner = () => {
  return (
    <div id="home" className="banner">
      <div className="container">
        <div className="banner__content">
          <div className="banner__content-left">
            <h1>
              HI, I'M EMIL! CREATIVE <br />
              <div className="verticalFlip">
                <span>Front end</span>
                <span>Developer</span>
                <span>UI / UX</span>
                <span>Designer</span>
              </div>
            </h1>
            <p className="text">
              I'm a passionate UI/UX designer with a mission to create
              delightful and intuitive digital experiences. With a strong
              foundation in design principles and a keen eye for detail, I
              specialize in translating complex ideas into user-friendly
              interfaces that captivate and engage.
            </p>
            <div className="banner__buttons">
              <Button>
                Download Me <i className="fa-solid fa-download"></i>
              </Button>
              <a className="watch-btn" href="">
                <i className="fa-sharp fa-solid fa-circle-play"></i>Watch The
                Video
              </a>
            </div>
          </div>
          <div className="banner__right">
            <div className="banner__right-img">
              <img
                src="https://zyan.vercel.app/images/banner_img_1.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
