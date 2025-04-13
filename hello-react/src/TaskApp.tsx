import React, { useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

interface Task {
  id: number;
  title: string;
  dueDate: string;
  description?: string;
}

const TaskApp: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTask = (
    title: string,
    dueDate: string,
    description: string,
  ) => {
    const newTask: Task = {
      id: Date.now(),
      title,
      dueDate,
      description,
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <div>
      <TaskForm onAddTask={handleAddTask} />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default TaskApp;
