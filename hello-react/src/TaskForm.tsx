import React, { useState } from "react";

interface Props {
  onAddTask: (title: string, dueDate: string, description: string) => void;
}

const TaskForm: React.FC<Props> = ({ onAddTask }) => {
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !dueDate.trim()) {
      alert("Title and Due Date are required!");
      return;
    }
    onAddTask(title, dueDate, description);
    setTitle("");
    setDueDate("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="todoTitle"
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        id="todoDueDate"
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <textarea
        id="todoDescription"
        placeholder="Task Description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button id="addTaskButton" type="submit">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
