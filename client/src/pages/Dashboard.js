import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/api/posts')
      .then(res => setPosts(res.data))
      .catch(err => console.error(err));
  }, []);
  return (
    <div className="container">
      <h2>Community Posts</h2>
      {posts.map(post => (
        <div key={post._id} className="post">
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};
export default Dashboard;
