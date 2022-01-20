import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./about.css";
import Aos from "aos";
import "aos/dist/aos.css";
import css_img from "../../images/css_img.png";
import git_img from "../../images/git_img.png";
import html_img from "../../images/html5_img.png";
import javascript_img from "../../images/javascript_img.png";
import nodejs_img from "../../images/nodejs_img.png";
import react_img from "../../images/react_img.png";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 700 });
  }, []);

  return (
    <div className="container">
      <h1 className="title">About</h1>
      <div className="about-container">
        <h2>
          Hello, I am Kaisa <i className="fas fa-smile" />
        </h2>
        <div className="detail-container">
          <p>
            I am a frontend developer with a main focus on React framework, currently based on Milton Keynes, UK.
          </p>
          <p>
            I am a <strong>fast learner</strong> who is motivated by challenge and the possibility of professional
            and personal growth.
          </p>
          <p>
            As a <strong>teamplayer</strong>, I thrive in helping others, and I am not scared to ask for help
            myself. My background lies in psychology, so for me, good communication is the key for a job well-done.
          </p>
          <p>
            I don't finish my work until I am 1000% satisfied with the results (oh well, here comes the
            perfectionist side of me!), but nobody has had anything bad to say about that so far!
          </p>
          <p>
            Go to check some of my projects <Link to="/projects">here</Link>!
          </p>
        </div>
      </div>
      <div className="about-container">
        <h2>Languages I speak</h2>
        <div className="language-container">
          <img src={html_img} alt="html logo" data-aos="flip-left" />
          <img src={css_img} alt="css logo" data-aos="flip-left" data-aos-delay="100" />
          <img src={javascript_img} alt="javascript logo" data-aos="flip-left" data-aos-delay="200" />
          <img src={react_img} alt="react logo" data-aos="flip-left" data-aos-delay="400" />
          <img src={nodejs_img} alt="nodejs logo" data-aos="flip-left" data-aos-delay="500" />
          <img src={git_img} alt="git logo" data-aos="flip-left" data-aos-delay="600" />
        </div>
        <p>...and ready to learn more!</p>
      </div>
      <div className="about-container">
        <h2>Download my resume</h2>
        <p>Click here to download</p>
      </div>
      <div className="about-container">
        <h2>Want to work with me?</h2>
        <p>Contact me here</p>
      </div>
    </div>
  );
};

export default About;
