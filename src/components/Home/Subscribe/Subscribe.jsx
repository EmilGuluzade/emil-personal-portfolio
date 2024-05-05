import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Subscribe.css";
import Button from "../../Utils/Button";
const Subscribe = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <section className="subscribe">
      <div className="overlay">
        <div className="container">
          <h3 data-aos="fade-up">SUBSCRIBE MY NEWSLETTER </h3>
          <div className="subscribe__input">
            <input placeholder="Enter Your Email" type="email" />
            <Button>Notify Now</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
