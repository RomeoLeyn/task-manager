import { useEffect, useState } from "react";
import api from "../api/config";
import { Link } from "react-router-dom";
import ErrorPage from "./Error/ErrorPage";

import randomColor from "randomcolor";

import "../style/ProjectsLists.css";

import avatarImg from "../img/avatar.png";
import { getProjectIcon, isColorLight } from "../utils/utils";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  const getProjects = async () => {
    try {
      const data = await api.get("/api/projects/all");
      setProjects(data.data);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleClick = (projectId) => {
    console.log("Clicked project ID:", projectId);
  };

  useEffect(() => {
    getProjects();
  }, []);

  if (error) {
    return <ErrorPage errorMessage={error} />;
  }

  return (
    <div className="project-list">
      {projects.map((project) => {
        const color = randomColor();
        const textColor = isColorLight(color) ? "#000" : "#fff";
        return (
          <Link to={`/project/${project.id}`} key={project.id}>
            <div
              className="project-card"
              style={{ borderTopColor: `${color}` }}
            >
              <div
                className="project-header"
                style={{ backgroundColor: color, color: textColor }}
              >
                <span className="project-title">{project.title}</span>
                <span
                  className="project-type"
                  style={{ background: `#fff`, color: `${color}` }}
                >
                  {getProjectIcon("design")}
                  <span className="last-updated-at">
                    <b>1 hour ago</b>
                  </span>
                </span>
              </div>
              <div className="project-body">
                <span className="project-description">
                  {project.description}
                </span>
              </div>
              <div
                className="project-footer"
                style={{ borderTop: `2px solid ${color}` }}
              >
                <span
                  className="participants-caption"
                  style={{ background: color, color: textColor }}
                >
                  Participants (6)
                </span>
                <div
                  className="participants"
                  style={{ border: `1px solid ${color}` }}
                >
                  <img src={avatarImg} alt="Avatar" />
                  <img src={avatarImg} alt="Avatar" />
                  <img src={avatarImg} alt="Avatar" />
                  <img src={avatarImg} alt="Avatar" />
                  <img src={avatarImg} alt="Avatar" />
                  <img src={avatarImg} alt="Avatar" />
                  <img src={avatarImg} alt="Avatar" />
                  <img src={avatarImg} alt="Avatar" />
                  <img src={avatarImg} alt="Avatar" />
                  <img src={avatarImg} alt="Avatar" />
                  <img src={avatarImg} alt="Avatar" />
                </div>
                <span className="project-meta">
                  Created at:
                  <br /> {new Date().toLocaleString()}
                </span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Projects;
