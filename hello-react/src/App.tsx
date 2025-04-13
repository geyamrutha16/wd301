import React from 'react';
import TaskCard from './TaskCard';

const App: React.FC = () => {
  return (
    <div className="p-8">
      <TaskCard
        dueDate="2025-04-20"
        completedAtDate="2025-04-19"
        assigneeName="Amrutha G"
      />
    </div>
  );
};

export default App;
