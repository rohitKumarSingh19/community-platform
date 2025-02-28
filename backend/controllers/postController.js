import Post from '../models/Post.js';
import jwt from 'jsonwebtoken';
export const createPost = async (req, res) => {
  const { token, title, content } = req.body;
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const newPost = new Post({ title, content, author: decoded.userId });
  await newPost.save();
  res.json({ message: 'Post Created' });
};
export const getPosts = async (req, res) => {
  const posts = await Post.find().populate('author', 'name');
  res.json(posts);
};
