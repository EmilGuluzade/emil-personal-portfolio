import React from "react";
import "./About.css";
import Button from "../../Utils/Button";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about__left">
          <div className="section__heading-left">
            <h5 className="green__heading-left">ABOUT ME</h5>
            <h2 className="white__heading-left">
              Transforming visions into <br />
              exceptional portfolios
            </h2>
          </div>
          <div className="about__left-content">
            <p className="text">
              Nemo design enim ipsam voluptatem quim voluptas sit aspernatur aut
              odit auting fugit sed thisnquia consequuntur magni dolores eos
              designer heresm qui ratione
            </p>
            <Button>
              Download Me <i className="fa-solid fa-download"></i>
            </Button>
          </div>
        </div>
        <div className="about__right">
          <div className="about__right-img">
            <img src="	https://zyan.vercel.app/images/about_img.jpg" alt="" />

            <div class="about__right-daily">
              <i className="fa-solid fa-chart-pie"></i>
              <div class="daily__text">
                <h4>Daily Activity</h4>
                <p>Loream is ispam</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
