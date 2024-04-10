import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { FaUser, FaLock, FaPlus } from 'react-icons/fa';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/check-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        setErrorMessage('');
        setSuccessMessage(data.message);
        navigate('/dashboard');
      } else {
        const data = await response.json();
        setErrorMessage(data.message);
        setSuccessMessage('');
      }
    } catch (error) {
      console.error('Error checking user:', error.message);
      setErrorMessage('Error checking user. Please try again.');
      setSuccessMessage('');
    }
  };

  const handleNewAccountClick = () => {
    navigate('/register');
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <label htmlFor="username" className="login-label">
          <FaUser className="icon" />
          Username
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="login-input"
        />
        <label htmlFor="password" className="login-label">
          <FaLock className="icon" />
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />
        <button type="submit" className="login-button">
          GET STARTED
        </button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
        <button className="create-account-button" onClick={handleNewAccountClick}>
          <FaPlus className="icon" />
          CREATE NEW ACCOUNT
        </button>
      </form>
    </div>
  );
};

export default Login;
