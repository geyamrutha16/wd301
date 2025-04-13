import TaskCard from "./TaskCard";

const pendingTasks = [
  {
    title: "Build the website with static content",
    dueDate: "10th April",
    assigneeName: "Rohit S",
    isDone: false,
  },
  {
    title: "Add a blog",
    dueDate: "22nd March",
    assigneeName: "Rohit M",
    isDone: false,
  },
];

const doneTasks = [
  {
    title: "Design the mockup",
    completedAtDate: "10th April",
    assigneeName: "Rohit M",
    isDone: true,
  },
  {
    title: "Get the approval from principal",
    completedAtDate: "20th April",
    assigneeName: "Ajay S",
    isDone: true,
  },
];

export default function App() {
  return (
    <div className="p-8 font-sans bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-2">Smarter Tasks</h1>
      <p className="mb-8">
        <strong>Project:</strong> Graduation Final Year Project (Revamp College
        Website)
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Pending</h2>
          <div className="space-y-4">
            {pendingTasks.map((task, index) => (
              <TaskCard key={index} {...task} />
            ))}
            <button className="w-full py-2 text-left bg-gray-200 text-gray-500 rounded">
              + New task
            </button>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Done</h2>
          <div className="space-y-4">
            {doneTasks.map((task, index) => (
              <TaskCard key={index} {...task} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
