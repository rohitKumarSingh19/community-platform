import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CreateProject from '../components/CreateProject';
import ProjectList from '../components/ProjectList';
import './Collaborate.css';

const CollaboratePage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetching the list of projects from the backend API
    axios.get('https://community-platform-backend-ibib.onrender.com/api/projects')
      .then(response => setProjects(response.data))
      .catch(error => console.error('Error fetching projects:', error));
  }, []);

  return (
    <div className="collaborate-container">
      <h1>Collaborate on Projects</h1>
      <CreateProject /> {/* Component for creating new projects */}
      <ProjectList projects={projects} /> {/* Display list of projects */}
    </div>
  );
};

export default CollaboratePage;
