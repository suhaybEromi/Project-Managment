import NewTask from "./NewTask.jsx";

export default function Tasks({ tasks, onAdd, onDelete }) {
  return (
    <section>
      <h2 className="fw-bold mb-4">Tasks</h2>
      <NewTask onAdd={onAdd} />
      {tasks.length === 0 && (
        <p className="fw-semibold my-4">
          This project does not have any tasks yet.
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="bg-light p-2 w-75 mt-4 rounded-3">
          {tasks.map(task => (
            <li
              key={task.id}
              className="fw-semibold d-flex justify-content-between align-items-center list-unstyled mb-2"
            >
              <span>{task.text}</span>
              <button
                className="btn text-danger border-0"
                onClick={() => onDelete(task.id)}
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
