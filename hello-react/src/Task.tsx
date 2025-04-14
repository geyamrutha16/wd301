import { Task } from './types';
import './TaskCard.css';

interface TaskProps {
  task: Task;
}

const TaskCard: React.FC<TaskProps> = ({ task }) => {
  return (
    <div className="TaskItem bg-white shadow-md rounded p-4 mb-2">
      <h3 className="font-semibold text-lg">
        {task.title} ({task.dueDate})
      </h3>
      <p>{task.description}</p>
    </div>
  );
};

export default TaskCard;
