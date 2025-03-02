import express from 'express';
import { createPost, getPosts } from '../controllers/postController.js';
import authMiddleware from '../middleware/authMiddleware.js';
const router = express.Router();
router.post('/create', authMiddleware, createPost);
// router.post('/create', createPost)
router.get('/', getPosts);
export default router;
