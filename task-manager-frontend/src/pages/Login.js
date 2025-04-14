import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setpass] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email.trim()) {
      localStorage.setItem("user", email);
      navigate("/home");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.loginBox}>
        <h2 style={styles.heading}>🚀 Task Manager Login</h2>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />

<input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setpass(e.target.value)}
          style={styles.input}
        />

        <button onClick={handleLogin} style={styles.button}>Login</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: '100vh',
    background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
                url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1950&q=80') no-repeat center center/cover`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginBox: {
    backgroundColor: 'white',
    padding: '2rem 3rem',
    borderRadius: '12px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '90%',
    maxWidth: '400px'
  },
  heading: {
    marginBottom: '1.5rem',
    color: '#333'
  },
  input: {
    width: '100%',
    padding: '0.75rem',
    marginBottom: '1rem',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '1rem'
  },
  button: {
    width: '100%',
    padding: '0.75rem',
    backgroundColor: '#007bff',
    color: 'white',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: '0.3s'
  }
};

export default Login;
