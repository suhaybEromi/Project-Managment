import noProjectImage from "../assets/no-projects.png";
import Button from "./Button.jsx";

export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className="text-center">
      <img src={noProjectImage} style={{ width: "85px" }} />
      <h4 className="fw-bold">No Project Selected</h4>
      <p className="mt-3 mb-4 fw-bold text-black-50">
        Select a project or get started with a new one
      </p>
      <p>
        <Button onClick={onStartAddProject}>Create new project</Button>
      </p>
    </div>
  );
}
