import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setpass] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (!email.trim() || !password.trim()) {
      setError("Email and password are required");
      return;
    }
  
    try {
      const response = await axios.post('http://127.0.0.1:8000/register', {
        email,
        password
      });
  
      if (response.data.message === "User registered successfully") {
        localStorage.setItem("user", email);
        navigate("/");
      }
    } catch (err) {
      console.error('Registration error:', err);
    
      if (err.response) {
        console.log("Response error data:", err.response.data);
        setError(err.response.data?.detail || "Registration failed");
      } else if (err.request) {
        console.log("Request made but no response:", err.request);
        setError("Server is not responding. Please try again later.");
      } else {
        console.log("Error message:", err.message);
        setError("An unexpected error occurred: " + err.message);
      }
    }
    
  };
  

  return (
    <div style={styles.container}>
      <div style={styles.loginBox}>
        <h2 style={styles.heading}>Add New Employee</h2>

        {error && <p style={styles.error}>{error}</p>}

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
        <button onClick={handleRegister} style={styles.button}>Sign Up</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: '100vh',
    background: 'linear-gradient(135deg, #e2eafc, #cfd9df)',
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
  },
  error: {
    color: 'red',
    marginBottom: '1rem'
  }
};

export default Register;
