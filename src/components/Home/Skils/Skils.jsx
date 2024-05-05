import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Skils.css";
const Skils = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  let skils = [
    {
      title: "HTML",
      percent: "95%",
    },
    {
      title: "CSS",
      percent: "85%",
    },
    {
      title: "JAVASCRIPT",
      percent: "80%",
    },
    {
      title: "REACT JS",
      percent: "70%",
    },
    {
      title: "SASS",
      percent: "80%",
    },
    {
      title: "GITHUB",
      percent: "90%",
    },
  ];
  return (
    <section className="skils">
      <div className="container">
        <div className="section__heading">
          <h5 className="green__heading" data-aos="fade-up">EDUCATION & SKILL</h5>
          <p className="white__heading" data-aos="fade-up">
            Showcasing your talent <br /> amplifying your impact
          </p>
        </div>
        <div className="education">
          <div className="education__year" data-aos="fade-up">
            <span>2021 - 2024</span>
            <h3>Front End Developer</h3>
            <p className="text">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit sed thisnquia consequuntur magni dolores eos qui ratione
              voluptatem
            </p>
          </div>
          <div className="education__year" data-aos="fade-up">
            <span>2021 - 2024</span>
            <h3>Front End Developer</h3>
            <p className="text">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit sed thisnquia consequuntur magni dolores eos qui ratione
              voluptatem
            </p>
          </div> <div className="education__year" data-aos="fade-up">
            <span>2021 - 2024</span>
            <h3>Front End Developer</h3>
            <p className="text">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit sed thisnquia consequuntur magni dolores eos qui ratione
              voluptatem
            </p>
          </div> <div className="education__year" data-aos="fade-up">
            <span>2021 - 2024</span>
            <h3>Front End Developer</h3>
            <p className="text">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit sed thisnquia consequuntur magni dolores eos qui ratione
              voluptatem
            </p>
          </div>
        </div>
        <div className="education">
          {
            skils.map((item, index) => (
            <div key={index} className="skil__container">
              <div className="skil__wrapper">
                <p className="skil">{item.title}</p>
                <span data-aos="fade-right"
                  style={{ width: item.percent }}
                  className="greenBar"
                ></span>
              </div>
            </div>
          ))
          }
        </div>
      </div>
    </section>
  );
};

export default Skils;
