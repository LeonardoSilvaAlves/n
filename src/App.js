import React, { useState } from 'react';
import './App.css';
import { RiCheckboxCircleLine, RiDeleteBin6Line } from 'react-icons/ri';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { title: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const handleCompleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <h1>ReactTaskManager</h1>
      <div className="task-input">
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Digite uma tarefa"
        />
        <button onClick={handleAddTask}>Adicionar</button>
      </div>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li
            key={index}
            className={`task-item ${task.completed ? 'completed' : ''}`}
          >
            <span>{task.title}</span>
            <button onClick={() => handleCompleteTask(index)}>
              <RiCheckboxCircleLine />
            </button>
            <button onClick={() => handleDeleteTask(index)}>
              <RiDeleteBin6Line />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
