import Tasks from "./Tasks.jsx";

export default function SelectedProject({
  project,
  onDelete,
  onAddTask,
  onDeleteTask,
  tasks,
}) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <div className="mt-3">
      <header>
        <div className="d-flex justify-content-between">
          <h2 className="fw-bold text-uppercase">{project.title}</h2>
          <button onClick={onDelete} className="btn text-danger border-0">
            Delete
          </button>
        </div>
        <p className="text-black-50">{formattedDate}</p>
        <p className="fw-semibold">{project.description}</p>
      </header>
      <hr className="border-3 rounded-5" />
      <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks} />
    </div>
  );
}
