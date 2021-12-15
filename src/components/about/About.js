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
        <img src={html_img} />
        <img src={css_img} />
        <img src={javascript_img} />
        <img src={react_img} />
        <img src={nodejs_img} />
        <img src={git_img} />
      </div>
    </div>
  );
};

export default About;
