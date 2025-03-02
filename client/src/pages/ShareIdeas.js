// src/pages/ShareIdeas.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ShareIdeas.css'; // Import the new CSS for ShareIdeas component

const ShareIdeas = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    
    if (!token) {
      alert("You must be logged in to post!");
      return;
    }

    try {
      await axios.post('https://community-platform-q1t2.onrender.com/api/posts/create', { title, content }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Post created successfully!");
      navigate('/dashboard'); // Redirect to dashboard after posting
    } catch (error) {
      console.error(error);
      alert("Failed to create post.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
      <h2>Share Your Idea</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          required 
        />
        <textarea 
          placeholder="Describe your idea..." 
          value={content} 
          onChange={(e) => setContent(e.target.value)} 
          required 
        />
        <button type="submit">Post Idea</button>
      </form>
    </div>
    </div>
  );
};
export default ShareIdeas;
