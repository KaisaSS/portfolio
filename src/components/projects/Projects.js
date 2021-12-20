import "./projects.css";
import projectArr from "../../data/projectArr.json";

const Projects = () => {
  console.log(projectArr);
  return (
    <div className="container">
      <h1 className="title">Projects</h1>
      <div className="project-grid">
        {projectArr.map((project) => (
          <div className="project" key={project.name}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
