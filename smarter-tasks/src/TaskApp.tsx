import React, { useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { Task } from "./types";

const TaskApp: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTask = (title: string, description: string, dueDate: string) => {
    const newTask: Task = {
      id: Date.now(),
      title,
      description,
      dueDate,
    };
    setTasks((prevTasks) => [newTask, ...prevTasks]);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Smarter Tasks</h1>
      <TaskForm onAddTask={handleAddTask} />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default TaskApp;
