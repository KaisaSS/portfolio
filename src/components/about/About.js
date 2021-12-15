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
      <h2>Languages</h2>
      <div className="language-container">
        <img src={html_img} alt="html logo" />
        <img src={css_img} alt="css logo" />
        <img src={javascript_img} alt="javascript logo" />
        <img src={react_img} alt="react logo" />
        <img src={nodejs_img} alt="nodejs logo" />
        <img src={git_img} alt="git logo" />
      </div>
    </div>
  );
};

export default About;
