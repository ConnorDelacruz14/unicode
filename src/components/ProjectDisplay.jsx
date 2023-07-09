import React from "react";

function ProjectDisplay({ projects }) {
  return (
    <div className="projects-container">
      {projects &&
        projects.map((item) => (
          <ProjectItem
            key={item.pid}
            image={item.image}
            name={item.name}
            description={item.description}
            keywords={item.keywords}
          ></ProjectItem>
        ))}
    </div>
  );
}

function ProjectItem({ image, name, description, keywords }) {
  return (
    <div className="project-item">
      <img
        alt=""
        src={
          image
            ? image
            : `https://img.logoipsum.com/${Math.floor(
                Math.random() * (299 - 211 + 1) + 211
              )}.svg`
        }
      ></img>
      <div className="project-name">{name}</div>
      <div className="project-keywords">
        {keywords &&
          keywords.map((item, index) => (
            <span key={index}>{"  " + item.keywordName}</span>
          ))}
      </div>
      <div className="project-description">{description}</div>
    </div>
  );
}

export default ProjectDisplay;
