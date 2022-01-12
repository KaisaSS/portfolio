import { Link } from "react-router-dom";
import "./about.css";
import css_img from "../../images/css_img.png";
import git_img from "../../images/git_img.png";
import html_img from "../../images/html5_img.png";
import javascript_img from "../../images/javascript_img.png";
import nodejs_img from "../../images/nodejs_img.png";
import react_img from "../../images/react_img.png";

const About = () => {
  return (
    <div className="container">
      <h1 className="title">About</h1>
      <div className="about-container">
        <p>
          Hello, I am Kaisa <i className="fas fa-smile" />
        </p>
        <p>I am a frontend developer from Finland, currently based on Milton Keynes, UK.</p>
        <p>I am a fast learner who is motivated by challenge and the possibility of growth. </p>
        <p>
          As a teamplayer, I thrive in helping others (yes, I am a bit of a people-pleaser), and I am not scared to
          ask for help myself. My background is in psychology, so for me, good communication is the key for a job
          well-done.
        </p>
        <p>
          I don't finish my work until I am 1000% satisfied with the results (oh well, here comes the perfectionist
          side of me!), but nobody has had anything bad to say about that so far!
        </p>
        <p>
          Go to check some of my projects <Link to="/projects">here</Link>!
        </p>
      </div>
      <div className="about-container">
        <h2>Languages I speak:</h2>
        <div className="language-container">
          <img src={html_img} alt="html logo" />
          <img src={css_img} alt="css logo" />
          <img src={javascript_img} alt="javascript logo" />
          <img src={react_img} alt="react logo" />
          <img src={nodejs_img} alt="nodejs logo" />
          <img src={git_img} alt="git logo" />
        </div>
        <p>...and ready to learn more!</p>
      </div>
      <div className="about-container">
        <h2>Want to work with me?</h2>
      </div>
    </div>
  );
};

export default About;
