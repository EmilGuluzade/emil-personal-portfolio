import React from "react";
import "./Subscribe.css";
import Button from "../../Utils/Button";
const Subscribe = () => {
  return (
    <section className="subscribe">
      <div className="overlay">
        <div className="container">
          <h3>SUBSCRIBE MY NEWSLETTER </h3>
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
