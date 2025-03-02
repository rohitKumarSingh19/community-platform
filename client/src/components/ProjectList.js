import React from 'react';

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list">
      <h2>Available Projects</h2>
      {projects.length === 0 ? (
        <p>No projects available.</p>
      ) : (
        <ul>
          {projects.map((project) => (
            <li key={project._id}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <button>Join Project</button>  {/* Join functionality here */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProjectList;
