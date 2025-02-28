import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import postRoutes from './routes/postRoutes.js';
dotenv.config();
const app=express();
app.use(cors());
app.use(express.json());
//Routes
app.use('/api/auth',authRoutes);
app.use('/api/posts',postRoutes);
connectDB();
app.listen(process.env.PORT,()=>{
    console.log(`Server running on port ${process.env.PORT}`)
})