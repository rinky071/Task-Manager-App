import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddTask() {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");

  const [formData, setFormData] = useState({
    title: '',
    type: '',
    assigned_by: '',
    assigned_to: '',
    language: '',
    date: '',
    description: '',
    priority: 'medium',
    due_date: '',
    status: 'pending'
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTask = {
      ...formData,
      id: Date.now(),
      user,
      completed: false
    };
    try {
      await axios.post('http://127.0.0.1:8000/tasks/', newTask);
      navigate('/home', { state: { message: 'Task added successfully ✅' } });

    } catch (err) {
      console.error('Error adding task:', err);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>📝 Add New Task</h2>
      <form onSubmit={handleSubmit} style={styles.form}>

        <label style={styles.label}>Task Name</label>
        <input type="text" name="title" onChange={handleChange} required style={styles.input} />

        <label style={styles.label}>Type</label>
        <input type="text" name="type" onChange={handleChange} required style={styles.input} />

        <label style={styles.label}>Assigned By</label>
        <input type="text" name="assigned_by" onChange={handleChange} required style={styles.input} />

        <label style={styles.label}>Assigned To</label>
        <input type="text" name="assigned_to" onChange={handleChange} required style={styles.input} />

        <label style={styles.label}>Language</label>
        <input type="text" name="language" onChange={handleChange} required style={styles.input} />

        <label style={styles.label}>Date</label>
        <input type="date" name="date" onChange={handleChange} required style={styles.input} />

        <label style={styles.label}>Description</label>
        <textarea name="description" onChange={handleChange} required style={styles.textarea} />

        <label style={styles.label}>Priority</label>
        <select name="priority" onChange={handleChange} required style={styles.input}>
          <option value="low">Low</option>
          <option value="medium" selected>Medium</option>
          <option value="high">High</option>
        </select>

        <label style={styles.label}>Due Date</label>
        <input type="date" name="due_date" onChange={handleChange} required style={styles.input} />

        <label style={styles.label}>Status</label>
        <select name="status" onChange={handleChange} required style={styles.input}>
          <option value="pending" selected>Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>

        <button type="submit" style={styles.button}>➕ Add Task</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    padding: '2rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 'calc(100vh - 80px)',
    background: 'linear-gradient(135deg, #e2eafc, #cfd9df)'
  },
  heading: {
    textAlign: 'top',
    marginBottom: '1.5rem',
    fontSize: '1.8rem',
    color: '#333'
  },
  form: {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    width: '100%',
    maxWidth: '500px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  label: {
    fontWeight: 'bold',
    fontSize: '0.95rem'
  },
  input: {
    padding: '0.75rem',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '1rem',
    outline: 'none'
  },
  textarea: {
    padding: '0.75rem',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '1rem',
    outline: 'none',
    resize: 'vertical',
    minHeight: '80px'
  },
  button: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '0.75rem',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: '0.3s'
  }
};

export default AddTask;
