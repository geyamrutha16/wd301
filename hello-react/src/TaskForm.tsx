import { useState } from 'react';

interface Props {
  onAdd: (title: string, description: string, dueDate: string) => void;
}

const TaskForm: React.FC<Props> = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !dueDate) return;
    onAdd(title, description, dueDate);
    setTitle('');
    setDescription('');
    setDueDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 space-y-2">
      <input
        id="todoTitle"
        className="border p-2 w-full"
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        id="todoDescription"
        className="border p-2 w-full"
        type="text"
        placeholder="Description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        id="todoDueDate"
        className="border p-2 w-full"
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button
        id="addTaskButton"
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
