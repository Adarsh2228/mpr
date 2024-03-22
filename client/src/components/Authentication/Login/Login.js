import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="Login">
      <div className="Login-connect">
        <h1>Create your account</h1>
        <a href="#" className="btn btn-social btn-facebook">
          <i className="fa fa-facebook"></i> Log in with Facebook
        </a>
        <a href="#" className="btn btn-social btn-twitter">
          <i className="fa fa-twitter"></i> Log in with Twitter
        </a>
        <a href="#" className="btn btn-social btn-google">
          <i className="fa fa-google"></i> Log in with Google
        </a>
        <a href="#" className="btn btn-social btn-linkedin">
          <i className="fa fa-linkedin"></i> Log in with Linkedin
        </a>
      </div>
      <div className="Login-classic">
        <h2>Or use the classical way</h2>
        <form className="form">
          <fieldset className="username">
            <input type="text" placeholder="username" />
          </fieldset>
          <fieldset className="email">
            <input type="email" placeholder="email" />
          </fieldset>
          <fieldset className="password">
            <input type="password" placeholder="password" />
          </fieldset>
          <button type="submit" className="btn">
            Login
          </button>
        </form>
        {/* Link to registration page */}
        <p>Don't have an account? <Link to="/account/register-card">Register here</Link></p>
      </div>
    </div>
  );
};

export default Login;
