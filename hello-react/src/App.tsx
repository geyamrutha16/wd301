import React from 'react';
import TaskCard from './TaskCard';

const App: React.FC = () => {
  const pendingTasks = [
    {
      title: 'Finish TypeScript Migration',
      dueDate: '2025-04-15',
      assigneeName: 'Amrutha'
    },
    {
      title: 'Write Documentation',
      dueDate: '2025-04-20',
      assigneeName: 'Sai'
    }
  ];

  const doneTasks = [
    {
      title: 'Set up Vite Project',
      completedAtDate: '2025-04-10',
      assigneeName: 'Amrutha'
    }
  ];

  return (
    <div>
      <h1>Pending Tasks</h1>
      {pendingTasks.map((task, index) => (
        <TaskCard
          key={index}
          title={task.title}
          dueDate={task.dueDate}
          assigneeName={task.assigneeName}
        />
      ))}

      <h1>Done Tasks</h1>
      {doneTasks.map((task, index) => (
        <TaskCard
          key={index}
          title={task.title}
          completedAtDate={task.completedAtDate}
          assigneeName={task.assigneeName}
        />
      ))}
    </div>
  );
};

export default App;
