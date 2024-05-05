import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./About.css";
import Button from "../../Utils/Button";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about__left">
          <div className="section__heading-left">
            <h5 data-aos="fade-up" className="green__heading-left" >ABOUT ME</h5>
            <h2 data-aos="fade-up" className="white__heading-left">
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
          <div data-aos="fade-left" className="about__right-img">
            <img width="395px" height="475px"  src="data:image/png;base64,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" alt="" />

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
