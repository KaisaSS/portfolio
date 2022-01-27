import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./about.css";
import Aos from "aos";
import "aos/dist/aos.css";
import CV from "../../files/kaisasyrjä_resume.pdf";
import css_img from "../../images/css_img.png";
import express_img from "../../images/express_img.png";
import git_img from "../../images/git_img.png";
import html_img from "../../images/html5_img.png";
import javascript_img from "../../images/javascript_img.png";
import nodejs_img from "../../images/nodejs_img.png";
import react_img from "../../images/react_img.png";
import redux_img from "../../images/redux_img.png";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 700 });
  }, []);

  return (
    <div className="container">
      <h1 className="title">About</h1>
      <div className="about-container">
        <div>
          <div className="detail-container">
            <p>
              <i className="fas fa-file-code fa-lg detail-icon" /> Frontend developer - React
            </p>
            <p>
              <i className="fas fa-map-marker-alt fa-lg detail-icon" /> Milton Keynes / London, UK
            </p>
          </div>
          <p>
            I am a <span>fast learner</span> who is motivated by challenge and the possibility of professional and
            personal growth. I am constantly looking to perfect my skills and I am excited to learn new
            technologies to grow my skills base.
          </p>
          <p>
            As a <span>teamplayer</span>, I thrive in helping others, and I am not scared to ask for help myself.
            My background lies in psychology, so for me, <span>good communication</span> is the key for a job
            well-done.
          </p>
          <p>
            Although I am currently focused on front end development, my ambition is to become a full stack
            developer. I am currently open to all opportunities in front end development.
          </p>

          <p>
            Go to check some of my projects <Link to="/projects">here</Link>!
          </p>
        </div>
      </div>
      <div className="about-container">
        <h2>My tech stack</h2>
        <div className="language-container">
          <div className="languages">
            <img src={html_img} alt="html logo" data-aos="flip-left" />
            <img src={css_img} alt="css logo" data-aos="flip-left" data-aos-delay="50" />
            <img src={javascript_img} alt="javascript logo" data-aos="flip-left" data-aos-delay="100" />
            <img src={react_img} alt="react logo" data-aos="flip-left" data-aos-delay="150" />
          </div>
          <div className="languages">
            <img src={redux_img} alt="redux logo" data-aos="flip-left" />
            <img src={nodejs_img} alt="nodejs logo" data-aos="flip-left" data-aos-delay="50" />
            <img src={express_img} alt="express logo" data-aos="flip-left" data-aos-delay="100" />
            <img src={git_img} alt="git logo" data-aos="flip-left" data-aos-delay="150" />
          </div>
        </div>
        <p>...and ready to learn more!</p>
      </div>
      <div className="about-container">
        <h2>Download my resume</h2>
        <p>
          <i className="fas fa-download" />{" "}
          <a download="kaisasyrjä_resume" href={CV}>
            Click here
          </a>{" "}
          to download
        </p>
      </div>
      <div className="about-container">
        <h2>Want to work with me?</h2>
        <Link to="/contact">
          <button className="get-in-touch-btn">Get in touch</button>
        </Link>
      </div>
    </div>
  );
};

export default About;
