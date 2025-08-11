import React, { useState } from 'react';
import Header from './components/Header';
import InputForm from './components/InputForm';
import TaskList from './components/TaskList';
import './App.css';
function App() {
  const [tasks, setTasks] = useState([]);
  const addTask = (taskText) => {
    const newTask = { id: Date.now(), text: taskText, completed: false };
    setTasks([...tasks, newTask]);
  };
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };
  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };
  return (
    <div className="App">
      <Header />
      <InputForm addTask={addTask} />
      <TaskList 
        tasks={tasks} 
        deleteTask={deleteTask}
        toggleTask={toggleTask}
      />
    </div>
  );
}
export default App;