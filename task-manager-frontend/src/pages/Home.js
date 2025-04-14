import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskItem from '../components/TaskItem';

function Home() {
  const [tasks, setTasks] = useState([]);
  const user = localStorage.getItem("user");

  const fetchTasks = () => {
    axios.get(`http://127.0.0.1:8000/tasks`)
      .then(res => setTasks(res.data))
      .catch(err => console.error("Error fetching tasks", err));
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>📋 Task List</h2>

      <div style={styles.tableWrapper}>
        <table style={styles.table}>
          <thead>
            <tr style={styles.tableHeader}>
              <th style={styles.th}>ID</th>
              <th style={styles.th}>Task Name</th>
              <th style={styles.th}>Type</th>
              <th style={styles.th}>Assigned By</th>
              <th style={styles.th}>Assigned To</th>
              <th style={styles.th}>Language</th>
              <th style={styles.th}>Description</th>
              <th style={styles.th}>Priority</th>
              <th style={styles.th}>Date</th>
              <th style={styles.th}>Due Date</th>
              <th style={styles.th}>Status</th>
              <th style={styles.th}>Completed</th>
              <th style={styles.th}>Action</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map(task => (
              <TaskItem key={task.id} task={task} fetchTasks={fetchTasks} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "2rem",
    fontFamily: "Segoe UI, sans-serif",
    background: "#f8f9fa",
    minHeight: "100vh"
  },
  heading: {
    fontSize: "24px",
    color: "#333",
    marginBottom: "1rem"
  },
  tableWrapper: {
    overflowX: "auto",
    boxShadow: "0 0 12px rgba(0, 0, 0, 0.05)",
    borderRadius: "10px",
    backgroundColor: "#fff"
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    minWidth: "1000px"
  },
  tableHeader: {
    backgroundColor: "#e9ecef"
  },
  th: {
    padding: "12px 16px",
    borderBottom: "2px solid #dee2e6",
    fontWeight: "bold",
    fontSize: "14px",
    textAlign: "left"
  }
};

export default Home;
