import React, { useState } from "react";

const Home = () => {
  const [tasks, setTasks] = useState([
    { id: 0, name: "Coding", completed: true },
    { id: 1, name: "Games", completed: false },
    { id: 2, name: "Events", completed: false }
  ]);
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("all");

  // Add a new task
  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      setTasks([
        ...tasks,
        { id: tasks.length, name: newTask, completed: false }
      ]);
      setNewTask(""); // Clear input after adding
    }
  };

  // Toggle task completion
  const toggleTaskCompleted = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Filter tasks based on the selected filter
  const filteredTasks = tasks.filter(task => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <main className="Big-container">
      <div className="General">
        <form onSubmit={handleAddTask}>
          <h2 className="FORM">
            <label htmlFor="todo-input" className="First-label">
              My Activities
            </label>
          </h2>
          <input
            type="text"
            id="new-todo-input"
            className="First-input"
            name="text"
            autoComplete="off"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button type="submit" className="first-btn">
            Add
          </button>
        </form>
        
        <div className="Buttons">
          <button
            type="button"
            className="tasks-btn"
            aria-pressed={filter === "all"}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            type="button"
            className="tasks-btn"
            aria-pressed={filter === "active"}
            onClick={() => setFilter("active")}
          >
            Active
          </button>
          <button
            type="button"
            className="tasks-btn"
            aria-pressed={filter === "completed"}
            onClick={() => setFilter("completed")}
          >
            Completed
          </button>
        </div>

        <h2 id="list-heading">TASKS</h2>
        <div className="Ordered-list" aria-labelledby="list-heading">
          {filteredTasks.map(task => (
            <div key={task.id} className="todo stack-small">
              <div className="c-cb"> 
                <input
                  id={`todo-${task.id}`}
                  className="Checkbox-btn"
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTaskCompleted(task.id)}
                />
                <label className="todo-label" htmlFor={`todo-${task.id}`}>
                {task.name}
                </label>
                </div>
              <div className="btn-group">
                <button type="button" className="btn">
                  Edit <span className="visually-hidden">{task.name}</span>
                </button>
                <button
                  type="button"
                  className="End-btn"
                  onClick={() => deleteTask(task.id)}
                >
                  Delete <span className="visually-hidden">{task.name}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
