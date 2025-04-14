import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './dashboard.css';
import {
  FaUsers,
  FaTasks,
  FaTimesCircle,
  FaClock,
  FaExclamationTriangle,
  FaBell,
  FaHourglassHalf,
  FaSpinner,
  FaCheck,
} from 'react-icons/fa';

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    Employee: 0,
    'All Tasks': 0,
    Overdue: 0,
    'No Deadline': 0,
    'Due Today': 0,
    Notifications: 0,
    Pending: 0,
    'In Progress': 0,
    Completed: 0,
  });

  useEffect(() => {
    // Fetch dashboard data from the FastAPI backend
    axios.get('http://127.0.0.1:8000/dashboard')
      .then((response) => {
        setDashboardData(response.data); // Update the state with fetched data
      })
      .catch((error) => {
        console.error('Error fetching dashboard data:', error);
      });
  }, []);

  // Map of icons for each data point
  const data = [
    { icon: <FaUsers />, label: 'Employee', value: dashboardData.Employee },
    { icon: <FaTasks />, label: 'All Tasks', value: dashboardData['All Tasks'] },
    { icon: <FaTimesCircle />, label: 'Overdue', value: dashboardData.Overdue },
    { icon: <FaClock />, label: 'No Deadline', value: dashboardData['No Deadline'] },
    { icon: <FaExclamationTriangle />, label: 'Due Today', value: dashboardData['Due Today'] },
    { icon: <FaBell />, label: 'Notifications', value: dashboardData.Notifications },
    { icon: <FaHourglassHalf />, label: 'Pending', value: dashboardData.Pending },
    { icon: <FaSpinner />, label: 'In Progress', value: dashboardData['In Progress'] },
    { icon: <FaCheck />, label: 'Completed', value: dashboardData.Completed },
  ];

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">📊 Dashboard</h2>
      <div className="dashboard-grid">
        {data.map((item, index) => (
          <div key={index} className="dashboard-card">
            <div className="dashboard-icon">{item.icon}</div>
            <div className="dashboard-label">
              {item.value} {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
