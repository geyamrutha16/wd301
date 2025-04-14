import { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import { Task } from './types';

const TaskApp: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (title: string, description: string, dueDate: string) => {
    const newTask: Task = {
      id: Date.now(),
      title,
      description,
      dueDate,
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Smarter Tasks</h1>
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default TaskApp;
