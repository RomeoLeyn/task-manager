import Projects from "../../components/Projects";
import "./ProjectsPage.css";

const ProjectsPage = () => {
  return (
    <div className="page">
      <div className="projects-page-container">
        <h1 className="page-title">My Projects</h1>
      {/* Creat toolbar */}
        <Projects />
      </div>
    </div>
  );
};

export default ProjectsPage;
