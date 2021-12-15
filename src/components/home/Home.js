import React, { useEffect } from "react";
import "./home.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 700 });
  }, []);

  return (
    <div className="container">
      <div className="section">
        <div className="description">
          <p>Hello</p>
          <h1>I am Kaisa</h1>
          <p>a frontend developer</p>
        </div>
      </div>
      <div className="section">
        <div className="triangles" data-aos="zoom-out">
          <div className="triangle triangle-up">
            <div className="triangle-up-front"></div>
            <div className="triangle-up-back"></div>
          </div>
          <div className="triangle triangle-down">
            <div className="triangle-down-front"></div>
            <div className="triangle-down-back"></div>
          </div>
        </div>
        <div className="quote-box" data-aos="zoom-in-up">
          <p>
            <i className="fas fa-quote-left fa-2x" /> Love what you do,
          </p>
          <p>Do what you love</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
