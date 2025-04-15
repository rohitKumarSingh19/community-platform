// src/components/DiscussionCard.js
import React from 'react';

const DiscussionCard = ({ discussion }) => {
  return (
    <div className="discussion-card">
      <h3>{discussion.title}</h3>
      <p>{discussion.description}</p>
      <p><strong>By:</strong> {discussion.author?.username}</p>
    </div>
  );
};

export default DiscussionCard;
