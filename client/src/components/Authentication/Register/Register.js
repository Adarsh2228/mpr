import React, { useState } from 'react';
import './Register.css';
import axios from 'axios';

const Registration = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      // Send registration data to the backend
      const response = await axios.post('http://localhost:5000/api/register', {
        firstName,
        lastName,
        username,
        password,
      });
      console.log(response.data);
      // Handle success response
      alert('Registration successful!');
      setSubmitted(true);
    } catch (error) {
      console.error(error);
      // Handle error
      alert('Error registering user. Please try again later.');
    }
  };

  return (
    <div className="registration-container">
      <div className="registration-form">
        <div className="registration-header">
          <h2>Self Registration</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="registration-fields">
            <div className="field-container">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="field-container">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="field-container">
              <label htmlFor="username">Username / Email</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="field-container password-container">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="field-container password-container">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>
          <button type="submit" className={`submit-button ${submitted ? 'submitted' : ''}`}>
            {submitted ? "Submitted" : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
