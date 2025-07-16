
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      //console.log("Login Response:", res.data); // ✅ Debugging
      if (res.data.token) {
        localStorage.setItem('token', res.data.token); // ✅ Store token
        //console.log("Token Stored:", localStorage.getItem('token')); // ✅ Debugging
        navigate('/dashboard'); // ✅ Navigate after login
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error(error);
      alert('Login failed');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <input type="email" autoComplete='new-email' placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Password" autoComplete='new-password' value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit" className="btn">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
