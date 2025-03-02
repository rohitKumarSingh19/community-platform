import Post from '../models/Post.js';
// import jwt from 'jsonwebtoken';
export const createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
// Ensure title and content exist
if (!title || !content) {
  return res.status(400).json({ message: 'Title and content are required' });
}
const userId = req.user.userId;
    // Create the new post using the authorId from decoded token
    //const newPost = new Post({ title, content, author: decoded.userId });
    const newPost = new Post({ title, content, author: userId });
    await newPost.save();
    res.json({ message: 'Post Created',post:newPost });
  } catch (error) {
    console.error('Token verification failed:', error);
    res.status(400).json({ message: 'Invalid token' });
  }
};
export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('author', 'name');
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching posts' });
  }
};

