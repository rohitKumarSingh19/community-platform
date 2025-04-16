import axios from 'axios';
const API = axios.create({ baseURL: 'https://community-platform-4.onrender.com/api' });
export const registerUser = (data) => API.post('/auth/register', data);
export const loginUser = (data) => API.post('/auth/login', data);
export const fetchPosts = () => API.get('/posts');
export const createPost = (data) => API.post('/posts/create', data);
