import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './LearnGrow.css';
const LearnGrowPage = () => {
  const [discussions, setDiscussions] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  // Fetch all discussions when the page loads
  useEffect(() => {
    axios.get('https://community-platform-2.onrender.com/api/discussions')
      .then(res => setDiscussions(res.data))
      .catch(err => console.error(err));
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post('https://community-platform-2.onrender.com/api/discussions/create', { title, content }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert("Discussion posted successfully!");
      setTitle('');
      setContent('');
      // Reload the discussions
      axios.get('https://community-platform-2.onrender.com/api/discussions')
        .then(res => setDiscussions(res.data))
        .catch(err => console.error(err));
    } catch (error) {
      alert('Failed to create discussion');
    }
  };
  return (
    <div className="learn-grow-container">
      <h2>🎓 Learn & Grow</h2>
      <form onSubmit={handleSubmit} className="discussion-form">
        <input
          type="text"
          placeholder="Discussion Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Start a discussion..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button type="submit">Post Discussion</button>
      </form>
      <div className="discussions-list">
        {discussions.map((discussion) => (
          <div key={discussion._id} className="discussion-card">
            <h3>{discussion.title}</h3>
            <p>{discussion.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default LearnGrowPage;
