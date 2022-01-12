import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import pinkK from "../../images/pinkK.png";
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
          <img src={pinkK} alt="letter K in the background" className="bg-K" />
        </div>
      </div>
      <div className="section">
        <div className="triangles" data-aos={window.innerWidth < 700 ? "zoom-in" : "zoom-out"}>
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
      <div className="section">
        <h1>About</h1>
        <div className="link-btn">
          <Link to="/about">
            <h1>Read more</h1>
          </Link>
        </div>
      </div>
      <div className="section">
        <h1>Projects</h1>
        <div className="link-btn">
          <Link to="/projects">
            <h1>More projects</h1>
          </Link>
        </div>
      </div>
      <div className="section">
        <h1>Like what you see?</h1>
        <div className="link-btn">
          <Link to="/contact">
            <h1>Contact me</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
