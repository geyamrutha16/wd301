import React from "react";

interface Task {
  id: number;
  title: string;
  dueDate: string;
  description?: string;
}

interface Props {
  tasks: Task[];
}

const TaskList: React.FC<Props> = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task) => (
        <div className="TaskItem" key={task.id}>
          <h3>
            {task.title} ({task.dueDate})
          </h3>
          {task.description && <p>{task.description}</p>}
        </div>
      ))}
    </div>
  );
};

export default TaskList;
