import { useEffect, useState } from "react";
import api from "../../api/config";
import { Link, useParams } from "react-router-dom";

import "../../style/ProjectInfo.css";
import { getProjectIcon, isColorLight } from "../../utils/utils";

const Project = () => {
  const [project, setProject] = useState({});
  const { projectId } = useParams();

  const getProject = async () => {
    console.log(projectId);
    const response = await api.get(`/api/projects/${projectId}/`);
    setProject(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    getProject();
  }, [projectId]);

  return (
    <div className="project-info-overlay">
      <div
        className="project-info-container"
        style={{ borderTopColor: project.color }}
      >
        <h1 className="project-info-title">
          {getProjectIcon(project.category)} {project.title}
        </h1>
        <p className="project-info-description">{project.description}</p>
        <h3 className="project-info-members">{}</h3>
        <Link to={`/board/${project.id}`} className="project-info-link" style={{ borderColor: project.color }}>
          Go to Board
        </Link>
        <div className="project-info-created">
          <p className="project-info-created-at">
            Created At: <br />
            {/*                         <b>{formatDistanceToNowStrict(new Date(project.createdAt), {
                          addSuffix: true,
                        })}</b> */}
            <b>{project.createdAt}</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
