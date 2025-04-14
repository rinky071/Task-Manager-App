import React from 'react';
import { Link } from 'react-router-dom';
import { MdDashboard } from 'react-icons/md';

const Sidebar = () => {
  const user = localStorage.getItem("user");

  return (
    <div style={styles.sidebar}>
      <h2 style={styles.logo}>Task Manager</h2>
      {/* <p style={styles.user}>👤 {user}</p> */}
      <nav style={styles.nav}>
      <Link to="/dashboard" style={styles.link}>
  <MdDashboard style={{ marginRight: '8px' }} />
  Dashboard
</Link>
      <Link to="/addtask" style={styles.link}>📋 Add Task</Link>
        <Link to="/home" style={styles.link}>📋Tasks List</Link>
        <Link to="/register" style={styles.link}>👤Register</Link>
        <Link to="/" style={styles.link} onClick={() => localStorage.clear()}>🚪 Logout</Link>
      </nav>
    </div>
  );
};

const styles = {
  sidebar: {
    width: '250px',
    height: '100vh',
    background: 'linear-gradient(135deg, #4e54c8, #8f94fb)',
    color: 'white',
    padding: '20px',
    boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
    position: 'fixed',
    top: 0,
    left: 0
  },
  logo: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    marginBottom: '40px',
  },
  user: {
    marginBottom: '30px',
    fontStyle: 'italic',
  },
  nav: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1.1rem',
    transition: '0.3s',
  }
};

export default Sidebar;
