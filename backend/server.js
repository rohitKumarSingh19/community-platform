import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import postRoutes from './routes/postRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
import discussionRoutes from './routes/discussionRoutes.js';

const app = express();

// ✅ Fallback to 5000 if PORT not set
const PORT = process.env.PORT || 5000;

// ✅ Only allow localhost frontend during development
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/discussions', discussionRoutes);

// Connect DB and start server
connectDB();

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
