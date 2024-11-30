import { useEffect, useState } from "react";
import api from "../api/config";
import { Link } from "react-router-dom";
import ErrorPage from "./Error/ErrorPage";
import { getProjectIcon, isColorLight } from "../utils/utils";
import avatarImg from "../img/avatar.png";

import { formatDistanceToNowStrict } from "date-fns";

import "../style/ProjectsLists.css";
import CreateProject from "./modal/CreateProject";

const predefinedColors = [
  "#FF5733", // яскравий помаранчевий
  "#33FF57", // яскравий зелений
  "#3357FF", // насичений синій
  "#FF33A1", // рожевий фуксія
  "#FFD700", // золотий
  "#00CED1", // темний бірюзовий
  "#FF4500", // оранжево-червоний
  "#32CD32", // лаймовий
  "#8A2BE2", // синьо-фіолетовий
  "#20B2AA", // світлий морський
  "#FF6347", // томатний
  "#4682B4", // стальний синій
  "#DA70D6", // орхідея
  "#5F9EA0", // сіро-блакитний
  "#FFA07A", // світлий лососевий
  "#7FFF00", // яскраво-зелений
  "#FF69B4", // гарячий рожевий
  "#CD5C5C", // індійський червоний
  "#87CEEB", // небесно-блакитний
  "#6B8E23", // оливково-зелений
  "#FFB6C1", // світло-рожевий
  "#8B0000", // темно-червоний
  "#40E0D0", // бірюзовий
  "#ADFF2F", // жовто-зелений
  "#BA55D3", // середній пурпурний
  "#FF8C00", // темний оранжевий
  "#4169E1", // королівський синій
  "#DAA520", // золотисто-коричневий
  "#9932CC", // темний фіолетовий
  "#F08080", // світло-кораловий
];

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [error, setError] = useState(null);
  const [usedColors, setUsedColors] = useState(new Set());

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  // Функція для отримання всіх проектів та їх кольорів
  const getProjects = async () => {
    try {
      const data = await api.get("/api/projects/");
      setProjects(data.data);

      // Оновлюємо `usedColors` для унікальних кольорів
      const colors = data.data.map((project) => project.color);
      setUsedColors(new Set(colors));
    } catch (error) {
      setError(error.message);
    }
  };

  // Функція для отримання випадкового доступного кольору
/*   const getRandomColor = () => {
    const availableColors = predefinedColors.filter(
      (color) => !usedColors.has(color)
    );
    if (availableColors.length === 0) {
      throw new Error("No available colors left.");
    }
    return availableColors[Math.floor(Math.random() * availableColors.length)];
  }; */

  const handleCreateProject = (projectData) => {
    setProjects((prev) => [...prev, projectData]);
  };

  useEffect(() => {
    getProjects();
  }, []);

  if (error) {
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
                      {getProjectIcon(project.category.toLocaleLowerCase())}
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
        <CreateProject isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={handleCreateProject}/>
    </>
  );
};

export default Projects;
