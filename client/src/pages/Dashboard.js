import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.warn("No Token Found! Redirecting to Login.");
      navigate("/login");
      return;
    }

    axios
      .get("https://community-platform-q1t2.onrender.com/api/posts", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        console.log("Posts Fetched:", res.data);
        setPosts(res.data);
      })
      .catch((err) => {
        console.error("Error Fetching Posts:", err);
      });
  }, [navigate]);

  return (
    <div className="container">
      <h2>Community Posts</h2>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post._id} className="post">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        ))
      ) : (
        <p>No posts available</p>
      )}
    </div>
  );
};

export default Dashboard;
