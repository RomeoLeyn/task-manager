import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { freezeWindow, getProjectIcon, getRandomColor, isColorLight, unfreezeWindow } from "../utils/utils";
import { formatDistanceToNowStrict } from "date-fns";

import api from "../api/config";
import ErrorPage from "./Error/ErrorPage";
import avatarImg from "../img/avatar.png";

import CreateProject from "./modal/CreateProjectModal/CreateProject";

import "../style/ProjectsLists.css";
import { addImportant } from "../api/user";


const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [error, setError] = useState(null);
  const [usedColors, setUsedColors] = useState(new Set());

  const openModal = () => {
    freezeWindow();
    setModalOpen(true);
  }
  const closeModal = () => {
    unfreezeWindow();
    setModalOpen(false);
  }

  const getProjects = async () => {
    try {
      const data = await api.get("/api/projects/");
      setProjects(data.data);

      const colors = data.data.map((project) => project.color);
      setUsedColors(new Set(colors));
    } catch (error) {
      setError(error.message);
    }
  };

  const handleCreateProject = () => {
    getProjects();
    window.location.reload();
  };

  const handleClickAddImportant = async (event, projectId) => {
    event.preventDefault();
    event.stopPropagation();
    await addImportant(projectId);
  };

  useEffect(() => {
    getProjects();
  }, []);

  if (error) {
    freezeWindow();
    return (
      <ErrorPage
        errorMessage="Please, try to log in again"
        errorAction="Go back to login page"
        errorStatus="401"
        errorTitle="Your session has expired"
      />
    );
  }

  return (
    <>
      <div className="project-list">
        <div
          className="project-card project-card-new"
          style={{ borderTopColor: `black` }}
          onClick={openModal}
        >
          <div
            className="project-header"
            style={{ backgroundColor: `black`, color: `white` }}
          >
            <span className="project-title">CREATE NEW PROJECT</span>
            <span
              className="project-type"
              style={{ background: `white`, color: `black` }}
            >
              <span className="project-type-icon">
                <i className="fa-regular fa-square-plus"></i>
              </span>
            </span>
          </div>
          <div className="project-body">
            <span className="project-description">
              <i className="fa-solid fa-plus"></i>
            </span>
          </div>
          <div className="project-footer"></div>
        </div>

        {projects.map((project) => {
          const textColor = isColorLight(project.color) ? "#000" : "#fff";
          return (
            <Link to={`/project/${project.id}`} key={project.id}>
              <div
                className="project-card"
                style={{ borderTopColor: project.color }}
              >
                <div
                  className="project-header"
                  style={{ backgroundColor: project.color, color: textColor }}
                >
                  <span className="project-title">{project.title}</span>

                  <span
                    className="project-type"
                    style={{ background: `#fff`, color: project.color }}
                  >
                    <span className="project-type-icon">
                      {getProjectIcon(project.category)}
                    </span>
                    <span className="last-modified">
                      last modified:
                      <br />

                      <span className="time">
                        {formatDistanceToNowStrict(new Date(project.updatedAt), {
                          addSuffix: true,
                        })}
                      </span>
                    </span>
                    <span onClick={(event) => {
                      handleClickAddImportant(event, project.id)
                    }}> <i className="fa-regular fa-star"></i></span>
                  </span>

                </div>
                <div className="project-body">
                  <span className="project-description">
                    {project.description}
                  </span>
                </div>
                <div
                  className="project-footer"
                  style={{ borderTop: `2px solid ${project.color}` }}
                >
                  <span
                    className="participants-caption"
                    style={{ background: project.color, color: textColor }}
                  >
                    Participants (6)
                  </span>
                  <div
                    className="participants"
                    style={{ border: `1px solid ${project.color}` }}
                  >
                    {Array(10)
                      .fill(null)
                      .map((_, idx) => (
                        <img src={avatarImg} alt="Avatar" key={idx} />
                      ))}
                  </div>
                  <span className="project-meta">
                    Created at:
                    <br /> {new Date(project.createdAt).toLocaleString()}
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <CreateProject
        isOpen={isModalOpen}
        randColor={getRandomColor()}
        onClose={closeModal}
        onSubmit={handleCreateProject} />
    </>
  );
};

export default Projects;
