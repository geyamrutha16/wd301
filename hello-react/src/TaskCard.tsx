import React from 'react';
import './TaskCard.css';

interface TaskCardProps {
  dueDate: string;
  completedAtDate: string;
  assigneeName: string;
}

const TaskCard: React.FC<TaskCardProps> = ({ dueDate, completedAtDate, assigneeName }) => {
  return (
    <div className="card">
      <p><strong>Due Date:</strong> {dueDate}</p>
      <p><strong>Completed At:</strong> {completedAtDate}</p>
      <p><strong>Assignee:</strong> {assigneeName}</p>
    </div>
  );
};

export default TaskCard;
