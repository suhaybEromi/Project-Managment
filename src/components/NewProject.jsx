import { useRef } from "react";
import Input from "./Input.jsx";
import Modal from "./Modal.jsx";

export default function NewProject({ onAdd, onCancel }) {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() == "" ||
      enteredDescription.trim() == "" ||
      enteredDueDate.trim() == ""
    ) {
      modal.current.open();
      return;
    }
    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="fw-bold">Invalid Input</h2>
        <p className="mt-3 mb-4 fw-semibold text-dark">
          Oops ... looks like you forgot to enter a value.
        </p>
        <p className="mt-3 mb-4 fw-semibold text-dark">
          Please make sure you provide a valid value for every input field.
        </p>
      </Modal>
      <div>
        <main className="list-unstyled justify-content-center d-flex">
          <li>
            <button onClick={onCancel} className="btn border-0">
              Cancel
            </button>
          </li>
          <li>
            <button onClick={handleSave} className="btn btn-dark ms-2">
              Save
            </button>
          </li>
        </main>
        <div>
          <Input type="text" ref={title} label="Title" />
          <Input ref={description} label="Description" textarea />
          <Input type="date" ref={dueDate} label="Due Date" />
        </div>
      </div>
    </>
  );
}
