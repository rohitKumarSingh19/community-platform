import express from 'express';
import { createProject, getProjects,joinProject } from '../controllers/projectController.js';
import authMiddleware from '../middleware/authMiddleware.js';
const router = express.Router();
router.post('/create', authMiddleware, createProject); // Protect the route with authentication middleware
router.get('/', getProjects);  // Public route to fetch projects
// ✅ New route to join a project
router.post('/:id/join', authMiddleware, joinProject);
export default router;
