import Projects from "../../components/Projects";
import "./ProjectsPage.css";

const ProjectsPage = () => {
  return (
    <div className="page">
      <div className="page-menu">
        <button className="add-project-btn">
          <i class="fa-solid fa-plus"></i> Add project
        </button>
      </div>
      <div className="projects-page-container">
        <h1 className="page-title">My Projects</h1>
        <Projects />
      </div>
    </div>
  );
};

export default ProjectsPage;
