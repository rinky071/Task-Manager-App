import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function EditTaskPage() {
  const [task, setTask] = useState({
    title: '',
    type: '',
    assigned_by: '',
    assigned_to: '',
    language: '',
    description: '',
    priority: '',
    date: '',
    due_date: '',
    status: '',
    completed: false,
  });

  const { taskId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/tasks/${taskId}`)
      .then((res) => setTask(res.data))
      .catch((err) => {
        console.error('Error fetching task:', err);
        alert('Error loading task data.');
      });
  }, [taskId]);

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://127.0.0.1:8000/tasks/${taskId}`, task)
      .then(() => {
        alert('Task updated successfully!');
        navigate('/home');
      })
      .catch((err) => {
        console.error('Error updating task:', err);
        alert('Error updating task!');
      });
  };

  const containerStyle = {
    maxWidth: "700px",
    margin: "2rem auto",
    padding: "2rem",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    fontFamily: "Arial, sans-serif"
  };

  const headingStyle = {
    textAlign: "center",
    marginBottom: "1.5rem",
    color: "#333"
  };

  const formGroupStyle = {
    marginBottom: "1rem"
  };

  const labelStyle = {
    display: "block",
    marginBottom: "0.5rem",
    fontWeight: "bold",
    color: "#444"
  };

  const inputStyle = {
    width: "100%",
    padding: "0.5rem",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "14px"
  };

  const textareaStyle = {
    ...inputStyle,
    height: "80px",
    resize: "vertical"
  };

  const buttonStyle = {
    marginTop: "1.5rem",
    padding: "0.75rem 1.5rem",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Edit Task</h2>
      <form onSubmit={handleSubmit}>
        {[
          { label: "Task Title", name: "title", type: "text" },
          { label: "Type", name: "type", type: "text" },
          { label: "Assigned By", name: "assigned_by", type: "text" },
          { label: "Assigned To", name: "assigned_to", type: "text" },
          { label: "Language", name: "language", type: "text" },
          { label: "Priority", name: "priority", type: "text" },
          { label: "Date", name: "date", type: "date" },
          { label: "Due Date", name: "due_date", type: "date" },
          { label: "Status", name: "status", type: "text" }
        ].map(({ label, name, type }) => (
          <div style={formGroupStyle} key={name}>
            <label style={labelStyle}>{label}</label>
            <input
              type={type}
              name={name}
              value={task[name]}
              onChange={handleChange}
              style={inputStyle}
              required={name === "title"}
            />
          </div>
        ))}

        <div style={formGroupStyle}>
          <label style={labelStyle}>Description</label>
          <textarea
            name="description"
            value={task.description}
            onChange={handleChange}
            style={textareaStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>
            <input
              type="checkbox"
              name="completed"
              checked={task.completed}
              onChange={(e) =>
                setTask({ ...task, completed: e.target.checked })
              }
              style={{ marginRight: "0.5rem" }}
            />
            Mark as Completed
          </label>
        </div>

        <button type="submit" style={buttonStyle}>Update Task</button>
      </form>
    </div>
  );
}

export default EditTaskPage;