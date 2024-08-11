import { useState } from "react";

export default function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState("");

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    if (enteredTask.trim() === "") return;
    onAdd(enteredTask);
    setEnteredTask("");
  }

  return (
    <div className="d-flex">
      <input
        type="text"
        className="form-control border-2 w-75"
        onChange={handleChange}
        value={enteredTask}
      />
      <button
        className="btn btn-outline-dark border-0 ms-2"
        onClick={handleClick}
      >
        Add Task
      </button>
    </div>
  );
}
