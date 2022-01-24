import { useState } from "react";
import "./projects.css";
import projectArr from "../../data/projectArr.json";
import SingleProject from "./SingleProject";

const Projects = () => {
  const [showProject, setShowProject] = useState(false);
  const [singleProject, setSingleProject] = useState(null);

  const showSingleProject = (project) => {
    setShowProject(!showProject);
    setSingleProject(project);
  };

  return (
    <div className="container">
      <h1 className="title">Projects</h1>
      <div className="project-grid">
        {projectArr.map((project) => (
          <div className="project" key={project.name}>
            <h3>{project.name}</h3>
            <div className="project-cover">
              <img src={project.coverPhoto} alt="cover" />
            </div>
            <p className="project-description">{project.description}</p>
            <div
              className="tooltip"
              onClick={() => {
                showSingleProject(project);
              }}
            >
              <button>
                <i className="fas fa-angle-double-right fa-2x" />
              </button>
              <span className="tooltiptext">See more</span>
            </div>
          </div>
        ))}
      </div>
      {showProject ? <SingleProject showSingleProject={showSingleProject} project={singleProject} /> : null}
    </div>
  );
};

export default Projects;
