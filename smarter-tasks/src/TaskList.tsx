import React from "react";
import { Task } from "./types";
import "./TaskCard.css";
import TaskItem from "./Task"; // Instead of rendering manually


interface TaskListProps {
  tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task) => (
         <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
