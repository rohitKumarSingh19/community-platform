import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import postRoutes from './routes/postRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
import discussionRoutes from './routes/discussionRoutes.js';
const app=express();
app.use(cors());
app.use(express.json());
//Routes
app.use('/api/auth',authRoutes);
app.use('/api/posts',postRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/discussions',discussionRoutes)
connectDB();
app.listen(process.env.PORT,()=>{
    console.log(`Server running on port ${process.env.PORT}`)
})