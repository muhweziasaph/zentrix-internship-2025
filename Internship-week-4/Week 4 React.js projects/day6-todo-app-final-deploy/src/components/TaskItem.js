import React from 'react';
function TaskItem({ task, deleteTask, toggleTask }) {
  return (
    <li style={{ 
      textDecoration: task.completed ? 'line-through' : 'none', 
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '10px'
    }}>
      <span onClick={() => toggleTask(task.id)}>{task.text}</span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
}
export default TaskItem;