import { Row, Container, Col } from "react-bootstrap";
import Button from "./Button.jsx";

export default function ProjectsSidebar({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <Container fluid>
      <Row>
        <Col xs="12" sm="6" md="12" lg="10">
          <div
            className="text-bg-dark text-center p-5 rounded-4"
            style={{ height: "100vh" }}
          >
            <div className="fs-5 text-uppercase">
              <p className="fw-bold mb-3">Your Projects</p>
            </div>
            <Button onClick={onStartAddProject}>+ Add Project</Button>
            <ul className="mt-4 text-start list-unstyled ">
              {projects.map(project => {
                let cssClasses = "btn text-white-50 link-light";

                if (project.id === selectedProjectId) {
                  cssClasses += " text-light border-0";
                } else {
                  cssClasses += " text-bg-dark border-0";
                }

                return (
                  <li key={project.id}>
                    <button
                      className={cssClasses}
                      onClick={() => onSelectProject(project.id)}
                    >
                      {project.title}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
}