// src/Task.tsx
import React from "react";
import { Task } from "./types";

interface TaskProps {
  task: Task;
}

const TaskItem: React.FC<TaskProps> = ({ task }) => {
  return (
    <div className="TaskItem border p-2 mb-2 rounded shadow">
      <h3 className="font-semibold">
        {task.title} <span className="text-sm text-gray-500">({task.dueDate})</span>
      </h3>
      {task.description && <p className="text-gray-700">{task.description}</p>}
    </div>
  );
};

export default TaskItem;
