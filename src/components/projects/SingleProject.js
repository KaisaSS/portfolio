import SimpleImageSlider from "react-simple-image-slider";

const SingleProject = ({ showSingleProject, project }) => {
  const images = project.projectImages;

  return (
    <div className="single-project-container">
      <div
        className="project-background"
        onClick={() => {
          showSingleProject();
        }}
      ></div>
      <div className="single-project">
        <div className="project-title">
          <h1>{project.name}</h1>
          <span
            onClick={() => {
              showSingleProject();
            }}
          >
            <i className="fas fa-window-close fa-2x" />
          </span>
        </div>
        <div className="project-content">
          <div className="cover-image">
            <img src={project.coverPhoto} alt="" />
          </div>
          <div className="project-text">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <h4>Tech stack used:</h4>
            <div className="tech-buttons">
              {project.techStack.map((tech) => (
                <button className="tech-button" key={tech.id}>
                  {tech.stack}
                </button>
              ))}
            </div>
          </div>
          <div className="image-slider">
            <SimpleImageSlider
              width={
                window.innerWidth > 1080
                  ? 380
                  : window.innerWidth > 950
                  ? 350
                  : window.innerWidth > 825
                  ? 310
                  : window.innerWidth > 500
                  ? 400
                  : window.innerWidth > 380
                  ? 300
                  : 250
              }
              height={
                window.innerWidth > 1080
                  ? 380
                  : window.innerWidth > 950
                  ? 350
                  : window.innerWidth > 825
                  ? 310
                  : window.innerWidth > 500
                  ? 400
                  : window.innerWidth > 380
                  ? 300
                  : 250
              }
              images={images}
              showBullets={false}
              showNavs={true}
              navSize={40}
              navMargin={0}
            />
          </div>
        </div>
        <div className="project-links">
          {project.website ? (
            <a href={project.website} target="_blank" rel="noreferrer">
              <i className="fas fa-link fa-2x link" />
            </a>
          ) : (
            <></>
          )}
          <a href={project.github} target="_blank" rel="noreferrer">
            <i className="fab fa-github fa-2x link" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
