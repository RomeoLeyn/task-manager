import Projects from "../../components/Projects";
import '../../style/ProjectsPage.css';

const ProjectsPage = () => {
    return (
        <div className="projects-page-container">
            <h1 className="page-title">My Projects</h1>
            <Projects />
        </div>
    );
}

export default ProjectsPage;