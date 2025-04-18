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

// ✅ CORS config to allow your Netlify frontend
// app.use(cors({
//   origin: ['http://localhost:3000', 'https://shiny-chebakia-65d5fd.netlify.app'],
//   credentials: true,
// }));
app.use(cors({
  origin: [
    'http://localhost:3000',
    'https://shiny-chebakia-65d5fd.netlify.app',
    'https://delightful-sprite-875ac8.netlify.app' // 👈 add this
  ],
}));

app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/discussions', discussionRoutes);

// Connect DB and start server
connectDB();

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
