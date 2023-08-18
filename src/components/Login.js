import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e) => {
    
    e.preventDefault();
    // Do your login validation here
    if (username === 'kutay' && password === '1234') {
      onLogin(); // Call the onLogin function from the parent component
      window.localStorage.setItem("login",JSON.stringify({login : true}));
      window.location.href = '/'; 
      // Redirect to the home page after successful login
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="button" onClick={handleSubmit}>Login</button>
      </form>
    </div>
  );
}

export default Login;
