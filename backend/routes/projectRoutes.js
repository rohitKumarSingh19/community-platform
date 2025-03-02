import express from 'express';
import { createProject, getProjects } from '../controllers/projectController.js';
import authMiddleware from '../middleware/authMiddleware.js';
const router = express.Router();
router.post('/create', authMiddleware, createProject); // Protect the route with authentication middleware
router.get('/', getProjects);  // Public route to fetch projects
export default router;
