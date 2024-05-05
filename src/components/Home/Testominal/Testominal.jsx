import React from "react";
import "./Testominal.css";
import quot from "../../../assets/images/quot.png";
import eska from "../../../assets/images/eska.jpeg";
import cavka from "../../../assets/images/cavka.jpeg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}
const Testominal = () => {
  var settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      }]
  };
  return (
    <section className="testominal">
      <div className="container">
        <div className="section__heading">
          <h5 className="green__heading">CLIENTS REVIEW</h5>
          <p className="white__heading">My testomonial</p>
        </div>
        <div className="slider-container">
          <Slider {...settings}>
            <div className="previewsectioncardscrd">
              <div className="previewsectioncardsimg">
                <img src={eska} alt="" />
              </div>

              <div className="previewsectioncardscrdicon">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>

              <div className="previewsectioncardscrdhead">
                <h3>Eshref Shefi</h3>
                <h5>Marketing Coordinator</h5>
              </div>

              <div className="previewsectioncardscrdcontent">
                <p className="text">
                  Financial planners help people to knowledge in about how to
                  invest and in save their moneye the most efficient way eve
                  plan ners help people tioniio know ledige in about how.
                </p>
                <img width="50px" height="35px" src={quot} alt="" />
              </div>
            </div>
            <div className="previewsectioncardscrd">
              <div className="previewsectioncardsimg">
                <img src={cavka} alt="" />
              </div>

              <div className="previewsectioncardscrdicon">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>

              <div className="previewsectioncardscrdhead">
                <h3>Cavid Suleymanli</h3>
                <h5>Marketing Coordinator</h5>
              </div>

              <div className="previewsectioncardscrdcontent">
                <p className="text">
                  Financial planners help people to knowledge in about how to
                  invest and in save their moneye the most efficient way eve
                  plan ners help people tioniio know ledige in about how.
                </p>
                <img width="50px" height="35px" src={quot} alt="" />
              </div>
            </div>
            <div className="previewsectioncardscrd">
              <div className="previewsectioncardsimg">
                <img src={eska} alt="" />
              </div>

              <div className="previewsectioncardscrdicon">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>

              <div className="previewsectioncardscrdhead">
                <h3>Eshref Shefi</h3>
                <h5>Marketing Coordinator</h5>
              </div>

              <div className="previewsectioncardscrdcontent">
                <p className="text">
                  Financial planners help people to knowledge in about how to
                  invest and in save their moneye the most efficient way eve
                  plan ners help people tioniio know ledige in about how.
                </p>
                <img width="50px" height="35px" src={quot} alt="" />
              </div>
            </div>
            <div className="previewsectioncardscrd">
              <div className="previewsectioncardsimg">
                <img src={cavka} alt="" />
              </div>

              <div className="previewsectioncardscrdicon">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>

              <div className="previewsectioncardscrdhead">
                <h3>Cavid Suleymanli</h3>
                <h5>Marketing Coordinator</h5>
              </div>

              <div className="previewsectioncardscrdcontent">
                <p className="text">
                  Financial planners help people to knowledge in about how to
                  invest and in save their moneye the most efficient way eve
                  plan ners help people tioniio know ledige in about how.
                </p>
                <img width="50px" height="35px" src={quot} alt="" />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testominal;
