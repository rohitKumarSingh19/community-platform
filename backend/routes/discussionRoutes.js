import express from 'express';
import { createDiscussion, getDiscussions } from '../controllers/discussionController.js';
import authMiddleware from '../middleware/authMiddleware.js';
const router = express.Router();
router.post('/create', authMiddleware, createDiscussion);  // Protect with authentication
router.get('/', getDiscussions);  // Public route to get discussions
export default router;
