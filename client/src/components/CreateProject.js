import React, { useState } from 'react';
import axios from 'axios';

const CreateProject = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');  // Retrieve token from localStorage

    try {
      await axios.post('http://localhost:5000/api/projects/create', {
        title,
        description,
      }, {
        headers: {
          Authorization: `Bearer ${token}`  // Send the token for authentication
        }
      });
      alert('Project Created!');
      setTitle('');
      setDescription('');
    } catch (error) {
      alert('Failed to create project');
      console.error(error);
    }
  };

  return (
    <div className="create-project">
      <h2>Create New Project</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Project Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Project Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button type="submit">Create Project</button>
      </form>
    </div>
  );
};

export default CreateProject;
