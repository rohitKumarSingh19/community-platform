// src/components/PostCard.js
import React from 'react';

const PostCard = ({ post }) => {
  return (
    <div className="post-card">
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <p><strong>Posted by:</strong> {post.author?.username}</p>
    </div>
  );
};

export default PostCard;
