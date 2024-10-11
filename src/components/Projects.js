import { useEffect, useState } from "react";
// import { getAllProjects } from "../api/projects";
import axios from "axios";
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
                <div className="project-card" key={project.id} onClick={() => handleClick(project.id)}>
                    <Link to={`/project/${project.id}`} className="project-title">
                        <h2>{project.title}</h2>
                    </Link>
                    <p className="project-description"> Description: {project.description}</p>
                    <p className="project-user">Created by: {project.user.username}</p>
                    <p className="project-members">Members: {project.members.join(', ') || 'No members'}</p>
                    <p className="project-dates">Created at: {new Date(project.created_at).toLocaleDateString()}</p>
                    <p className="project-dates">Updated at: {new Date(project.updated_at).toLocaleDateString()}</p>
                </div>
            ))}
        </div>
    );
}

export default Projects;