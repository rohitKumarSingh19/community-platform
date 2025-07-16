// import React from 'react';
// import axios from 'axios';

// const ProjectList = ({ projects }) => {
//   const handleJoin = async (projectId) => {
//     const token = localStorage.getItem('token');

//     if (!token) {
//       alert("Please login first to join a project.");
//       return;
//     }

//     try {
//       const res = await axios.post(
//         `http://localhost:5000/api/projects/${projectId}/join`,
//         {},
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       alert(res.data.message); // "Joined project successfully" or "Already joined"
//     } catch (error) {
//       console.error("Join project error:", error);
//       alert(error.response?.data?.message || "Failed to join project");
//     }
//   };

//   return (
//     <div className="project-list">
//       <h2>Available Projects</h2>
//       {projects.length === 0 ? (
//         <p>No projects available.</p>
//       ) : (
//         <ul>
//           {projects.map((project) => (
//             <li key={project._id}>
//               <h3>{project.title}</h3>
//               <p>{project.description}</p>
//               <button onClick={() => handleJoin(project._id)}>Join Project</button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default ProjectList;
import React from 'react';
import axios from 'axios';

const ProjectList = ({ projects }) => {
  const handleJoin = async (projectId) => {
    const token = localStorage.getItem('token');

    if (!token) {
      alert("Please login first to join a project.");
      return;
    }

    try {
      const res = await axios.post(
        `https://community-platform-backend-ibib.onrender.com/api/projects/${projectId}/join`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert(res.data.message);
    } catch (error) {
      console.error("Join project error:", error);
      alert(error.response?.data?.message || "Failed to join project");
    }
  };

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
              <button onClick={() => handleJoin(project._id)}>Join Project</button>

              {project.members && project.members.length > 0 && (
                <div className="members-list">
                  <strong>Members Joined:</strong>
                  <ul>
                    {project.members.map((member) => (
                      <li key={member._id}>
                        {member.name} ({member.email})
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProjectList;
