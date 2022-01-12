const SingleProject = ({ showSingleProject, singleProject }) => {
  return (
    <div>
      <div
        className="project-background"
        onClick={() => {
          showSingleProject();
        }}
      ></div>
      <div className="single-project">
        <div className="project-title">
          <h1>{singleProject.name}</h1>
          <span
            onClick={() => {
              showSingleProject();
            }}
          >
            <i className="fas fa-window-close fa-2x" />
          </span>
        </div>
        <div className="project-links">
          <a href={singleProject.website ? singleProject.website : null} target="_blank" rel="noreferrer">
            <i className="fas fa-link fa-2x link" />
          </a>
          <a href={singleProject.github} target="_blank" rel="noreferrer">
            <i className="fab fa-github fa-2x link" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
