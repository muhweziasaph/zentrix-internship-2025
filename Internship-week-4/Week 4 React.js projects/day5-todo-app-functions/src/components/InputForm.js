import React, { useState } from 'react';
function InputForm({ addTask }) {
  const [input, setInput] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    addTask(input);
    setInput('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Enter a task"
      />
      <button type="submit">Add</button>
    </form>
  );
}
export default InputForm;