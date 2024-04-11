import React, { useState } from 'react';
import axios from 'axios';
import './Register.css'; // Ensure your CSS file contains all the necessary styles.
import { useNavigate } from 'react-router-dom';
const Register = () => {
const [username, setUsername] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [confirmPassword, setConfirmPassword] = useState('');
const [submitted, setSubmitted] = useState(false);
const navigate = useNavigate();

const handleSubmit = async (e) => {
e.preventDefault();

if (password !== confirmPassword) {
alert('Passwords do not match!');
return;
}

try {
const response = await axios.post('http://localhost:5000/api/user/register', {
username,
email,
password,
});

if (response.status === 200) {
console.log('Registration successful', response.data);
alert('Registration successful!');
setSubmitted(true);
navigate('/account/login');
} else {
console.error('Registration failed:', response.data.message || 'Something went wrong');
alert('Error registering user. Please try again later.');
}
} catch (error) {
console.error('Registration error:', error);
alert('Error registering user. Please try again later.');
}
};

return (
<div className="registration-container">
<div className="registration-form">
<h2 className="registration-header">Self Registration</h2>
<form onSubmit={handleSubmit} className="registration-fields">
<div className="field-container">
<label htmlFor="username">Username</label>
<input
type="text"
id="username"
value={username}
onChange={(e) => setUsername(e.target.value)}
/>
</div>
<div className="field-container">
<label htmlFor="email">Email</label>
<input
type="email" // Changed to type="email" for better validation
id="email"
value={email}
onChange={(e) => setEmail(e.target.value)}
/>
</div>
<div className="field-container">
<label htmlFor="password">Password</label>
<input
type="password"
id="password"
value={password}
onChange={(e) => setPassword(e.target.value)}
/>
</div>
<div className="field-container">
<label htmlFor="confirmPassword">Confirm Password</label>
<input
type="password"
id="confirmPassword"
value={confirmPassword}
onChange={(e) => setConfirmPassword(e.target.value)}
/>
</div>
<button type="submit" className={`submit-button ${submitted ? 'submitted' : ''}`}>
{submitted ? "Submitted" : "Register"}
</button>
</form>
</div>
</div>
);
};

export default Register;