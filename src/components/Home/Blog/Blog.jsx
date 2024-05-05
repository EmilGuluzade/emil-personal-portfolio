import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Button from "../../Utils/Button";
import "./Blog.css";
const Blog = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  let blogs = [
    {
      img: "https://zyan.vercel.app/images/blog/1.jpg",
      date: "31 December,2022",
      name: "By admin",
      comment: "Comments (05)",
      link: "The standard personal My portfolio",
    },
    {
      img: "https://zyan.vercel.app/images/blog/2.jpg",
      date: "31 December,2022",
      name: "By admin",
      comment: "Comments (05)",
      link: "The standard personal My portfolio",
    },
    {
      img: "https://zyan.vercel.app/images/blog/3.jpg",
      date: "31 December,2022",
      name: "By admin",
      comment: "Comments (05)",
      link: "The standard personal My portfolio",
    },
  ];

  return (
    <section id="blog" className="blog">
      <div className="container">
        <div className="blog__heading">
          <div className="section__heading-left">
            <h5 className="green__heading-left" data-aos="fade-up">MY BLOG</h5>
            <h2 className="white__heading-left" data-aos="fade-up">
              Unlocking the potential of your <br />
              personal brand
            </h2>
          </div>
          <div className="blog__heading-btn">
            <Button>More Blog +</Button>
          </div>
        </div>
        <div className="blog__cards">
          {blogs.map((item,index) => (
            <div data-aos="fade-right" key={index} className="blog__card">
              <img className="blog__card-img" src={item.img} alt="" />
              <div className="blog__card-content">
                <span>{item.date}</span>
                <ul>
                  <li>
                    <i class="fa-sharp fa-solid fa-circle-user"></i> {item.name}
                  </li>
                  <li>
                    <i class="fa-sharp fa-solid fa-circle-user"></i>
                    {item.comment}
                  </li>
                  <a href="">{item.link}</a>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
