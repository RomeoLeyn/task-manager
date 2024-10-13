import { useEffect, useState } from "react";
import api from "../api/config";
import { Link } from "react-router-dom";
import ErrorPage from "./Error/ErrorPage";

import '../style/ProjectsLists.css';

const Projects = () => {

    const [projects, setProjects] = useState([]);
    const [error, setError] = useState(null);

    const getProjects = async () => {
        try {
            const data = await api.get('/api/projects/all');
            setProjects(data.data);
        } catch (error) {
            setError(error.message);
        }
    }

    const handleClick = (projectId) => {
        console.log("Clicked project ID:", projectId);
    }

    useEffect(() => {
        getProjects();
    }, [])

    if (error) {
        return <ErrorPage errorMessage={error} />;
    }

    return (
        <div className="project-list">
            {projects.map(project => (
                <Link to={`/project/${project.id}`} >
                    <div className="project-card" key={project.id} onClick={() => handleClick(project.id)}>
                    <span className="project-title">
                        {project.title}
                    </span>
                    <span className="project-description">  {project.description}</span>
                </div>
            </Link>))}
        </div>
    );
}

export default Projects;
