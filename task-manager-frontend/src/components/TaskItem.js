import React from 'react';
import axios from 'axios';
import { FaTrash, FaCheckCircle, FaEdit } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function TaskItem({ task, fetchTasks }) {
  const handleComplete = () => {
    const updatedTask = { ...task, completed: true };
    axios.put(`http://localhost:8000/tasks/${task.id}`, updatedTask).then(fetchTasks);
  };

  const handleDelete = () => {
    // Confirm deletion before actually deleting the task
    const confirmDelete = window.confirm("Are you sure you want to delete this task?");
    if (confirmDelete) {
      axios.delete(`http://localhost:8000/tasks/${task.id}`).then(() => {
        fetchTasks();  // Refresh the task list after deletion
        alert('Task deleted successfully!');
      }).catch((err) => {
        console.error('Error deleting task:', err);
        alert('Failed to delete task!');
      });
    }
  };
  const navigate = useNavigate();
  const tdStyle = {
    padding: "10px 16px",
    borderBottom: "1px solid #e0e0e0",
    fontSize: "14px"
  };

  return (
    <tr>
      <td style={tdStyle}>{task.id}</td>
      <td style={tdStyle}>{task.title}</td>
      <td style={tdStyle}>{task.type}</td>
      <td style={tdStyle}>{task.assigned_by}</td>
      <td style={tdStyle}>{task.assigned_to}</td>
      <td style={tdStyle}>{task.language}</td>
      <td style={tdStyle}>{task.description}</td>
      <td style={tdStyle}>{task.priority}</td>
      <td style={tdStyle}>{task.date}</td>
      <td style={tdStyle}>{task.due_date}</td>
      <td style={tdStyle}>{task.status}</td>
      <td style={tdStyle}>{task.completed ? "✅" : "❌"}</td>
      <td style={tdStyle}>
        {/* Complete button */}
        {!task.completed && (
          <button
            onClick={handleComplete}
            style={{
              marginRight: "0.5rem",
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "green",
              fontSize: "18px",
            }}
            title="Complete Task"
          >
            <FaCheckCircle />
          </button>
        )}

        {/* Delete button */}
        <button
          onClick={handleDelete}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "red",
            fontSize: "18px",
          }}
          title="Delete Task"
        >
          <FaTrash />
        </button>

        {/* Edit button */}
        <button
  onClick={() => navigate(`/edittask/${task.id}`)}
  style={{
    background: "none",
    border: "none",
    cursor: "pointer",
    color: "blue",
    fontSize: "18px",
    marginLeft: "0.5rem",
  }}
  title="Edit Task"
>
  <FaEdit />
</button>
      </td>
    </tr>
  );
}

export default TaskItem;
