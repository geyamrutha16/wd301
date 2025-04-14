import React from "react";
import { Task } from "./types";
import "./TaskCard.css";

interface TaskListProps {
  tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task) => (
        <div className="TaskItem" key={task.id}>
          <h3>
            {task.title} ({task.dueDate})
          </h3>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
