import React, { useState } from 'react';
import "./Login.css";

const Login = ({ showLogin, setShowLogin }) => {
  const [currentState, setCurrentState] = useState('login');

  const toggleForm = () => {
    setCurrentState(currentState === 'login' ? 'signup' : 'login');
  };

  return (
    <div className={`login-popup ${showLogin ? 'show' : ''}`}>
      <div className="login-container">
        <span className="close-btn" onClick={() => setShowLogin(false)}>&times;</span>
        <h2>{currentState === 'login' ? 'Login' : 'Sign Up'}</h2>
        <form>
          {currentState === 'signup' && (
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
          )}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit">{currentState === 'login' ? 'Login' : 'Sign Up'}</button>
        </form>
        <p onClick={toggleForm}>
          {currentState === 'login' ? 'Don\'t have an account? Sign Up' : 'Already have an account? Login'}
        </p>
      </div>
    </div>
  );    
};

export default Login;