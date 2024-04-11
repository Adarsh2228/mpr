import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css'; // Ensure you have the CSS file for styling

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    if (username === '' || password === '') {
      alert('Please enter both username and password.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/user/login', {
        username,
        password,
      });

      if (response.data && response.data.token) {
        localStorage.setItem('token', response.data.token);
        alert('Login Successfully.');
        navigate('/'); // Navigate to homepage or dashboard
      } else {
        alert('Login failed. Please try again.');
      }
    } catch (error) {
      alert('Login failed. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h1>LOGIN</h1>
        <div className="form-group">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
            className="login-input"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="login-input"
          />
        </div>
        <button type="submit" className="login-button">
          LOGIN
        </button>
        <a href="#" className="forgot-password">
          Forgot Password?
        </a>
        <a href="/register" className="signup">
          Signup
        </a>
      </form>
    </div>
  );
}
