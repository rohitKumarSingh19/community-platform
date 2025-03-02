import Post from '../models/Post.js';
import jwt from 'jsonwebtoken';
export const createPost = async (req, res) => {
  // Retrieve the token from the authorization header
  const token = req.headers.authorization?.split(' ')[1]; // Get token from 'Bearer token' format
  console.log("Received Token:", token);  // Debugging to see what token is being passed
  if (!token) {
    return res.status(401).json({ message: 'No token provided' }); // Return an error if no token is found
  }
  try {
    // Verify the token
    // console.log("Received Token:", token); // Log token received in the header
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    //console.log("Decoded Token:", decoded);  // Debugging decoded token
    console.log('Token received:', token);  // Log the received token
    console.log('Decoded Token:', decoded); // Log the decoded token

    if (!decoded.userId) {
      return res.status(401).json({ message: 'Invalid token' });
    }
    const { title, content } = req.body;
// Ensure title and content exist
if (!title || !content) {
  return res.status(400).json({ message: 'Title and content are required' });
}
    // Create the new post using the authorId from decoded token
    const newPost = new Post({ title, content, author: decoded.userId });
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

