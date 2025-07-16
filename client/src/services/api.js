import axios from 'axios';
// const API = axios.create({ baseURL: 'http://localhost:5000/api' });
const API = axios.create({ baseURL: 'https://community-platform-backend-ibib.onrender.com/api' });
export const registerUser = (data) => API.post('/auth/register', data);
export const loginUser = (data) => API.post('/auth/login', data);
export const fetchPosts = () => API.get('/posts');
export const createPost = (data) => API.post('/posts/create', data);
