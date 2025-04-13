export default function TaskCard({
  title,
  dueDate,
  completedAtDate,
  assigneeName,
  isDone,
}) {
  return (
    <div className="bg-white shadow-md rounded p-4 border">
      <h3 className="font-bold text-md mb-2">{title}</h3>
      {isDone ? (
        <>
          <p className="text-sm text-gray-600">
            Completed on: {completedAtDate}
          </p>
        </>
      ) : (
        <>
          <p className="text-sm text-gray-600">Due on: {dueDate}</p>
        </>
      )}
      <p className="text-sm text-gray-600">Assignee: {assigneeName}</p>
    </div>
  );
}
