import Discussion from '../models/Discussion.js';
export const createDiscussion = async (req, res) => {
  try {
    const { title, content } = req.body;
    if (!title || !content) {
      return res.status(400).json({ message: 'Title and content are required' });
    }
    const newDiscussion = new Discussion({
      title,
      content,
      createdBy: req.user.userId  // The user who created the discussion
    });
    await newDiscussion.save();
    res.json({ message: 'Discussion created successfully', discussion: newDiscussion });
  } catch (error) {
    res.status(500).json({ message: 'Error creating discussion' });
  }
};
export const getDiscussions = async (req, res) => {
  try {
    const discussions = await Discussion.find().populate('createdBy', 'name');
    res.json(discussions);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching discussions' });
  }
};
