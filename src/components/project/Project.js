import { useEffect, useState } from "react";
import api from "../../api/config";
import { Link, useParams } from "react-router-dom";

const Project = () => {

    const [project, setProject] = useState({});
    const [members, setMembers] = useState([]);
    const { projectId } = useParams();

    const getProject = async () => {
        console.log(projectId);
        const response = await api.get(`/api/projects/id/${projectId}`);
        setProject(response.data.project);
        setMembers(response.data.members);
        console.log(response.data);
    }

    useEffect(() => {
        getProject();
    }, [projectId])

    return (
        <div>
            Project
            <Link to={`/board/${project.id}`}>Board</Link>
            <h1>{project.name}</h1>
            <h2>{project.description}</h2>
            <h3>{project.created_at}</h3>
            <h2>Members</h2>

            {members.map(member => (
                <div key={member.id}>
                    {member.username}
                </div>
            ))}
        </div>
    );
}

export default Project;