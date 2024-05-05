import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Portfolio.css";
const Portfolio = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <section id="projects" className="videosect">
      <div className="container">
        <div className="section__heading-left">
          <h5 className="green__heading-left" data-aos="fade-up">MY RECENT PORTFOLIO</h5>
          <h2 className="white__heading-left" data-aos="fade-up">
          Elevate your brand to new <br />
heights with our portfolio <br />
expertise
          </h2>
        </div>
        <div className="videocards">
          <div
            className="videocards__cont"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "15px",
              width: "100%",
              marginBottom: "10px",
            }}
          >
            <div className="videocard" style={{ width: "70%" }}>
              <a>
                <img
                  src="https://zyan.vercel.app/images/portfolio/1.jpg"
                  alt="portfolio"
                ></img>
              </a>
              <div class="video-text">
                <h4>sheet metal bending</h4>
                <p>soundcloud</p>
              </div>
            </div>
            <div className="videocard" style={{ width: "30%" }}>
              <a>
                <img
                  src="https://zyan.vercel.app/images/portfolio/2.jpg"
                  alt="portfolio"
                ></img>
              </a>
              <div class="video-text">
                <h4>sheet metal bending</h4>
                <p>soundcloud</p>
              </div>
            </div>
          </div>
          <div
            className="videocards__cont"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "15px",
              width: "100%",
            }}
          >
            <div className="videocard" style={{ width: "50%", height: "100%" }}>
              <a>
                <img
                  src="https://zyan.vercel.app/images/portfolio/3.jpg"
                  alt="portfolio"
                  width="636px"
                  height="550px"
                ></img>
              </a>
              <div class="video-text">
                <h4>sheet metal bending</h4>
                <p>soundcloud</p>
              </div>
            </div>
            <div className="videocard" style={{ width: "50%", height: "100%" }}>
              <a>
                <img
                  src="https://zyan.vercel.app/images/portfolio/4.jpg"
                  alt="portfolio"
                  width="636px"
                ></img>
              </a>
              <div class="video-text">
                <h4>sheet metal bending</h4>
                <p>soundcloud</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
