import { Link } from "react-router-dom";

import "./Header.scss";

import { useNavigate } from "react-router-dom";
import { getProjectIcon, isColorLight } from "../../utils/utils";
import { useAuth } from "../../hooks/useAuth";
import avatarUrl from "../../img/avatar.png";

const Header = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  
  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-start">
          <Link to="/" className="logo">
            <i class="fa-solid fa-table-columns"></i>
            <span className="name">BoardMaster</span>
          </Link>
          <div className="dropdown">
            <button className="dropdown-btn">
              Recent<i class="fa-solid fa-clock-rotate-left"></i>
            </button>
            <div className="dropdown-content">
              {/* {recentProjects.length > 0 ? (
                recentProjects.map((project) => ( */}
              <Link
                // to={`/project/${project.id}`}
                // key={project.id}
                className="dropdown-item"
              >
                <div
                  className="dropdown-project-icon"
                  style={{
                    backgroundColor: `lime`,
                    color: `${isColorLight("lime") ? "black" : "white"}`,
                  }}
                >
                  {getProjectIcon("development")}
                </div>
                <div className="dropdown-project-info">
                  <span className="dropdown-project-title">Project Unique</span>
                  <span className="dropdown-project-description">
                    A short description for the project
                  </span>
                </div>
                <div
                  className="dropdown-project-last-access"
                  style={{
                    borderColor: `lime`,
                    color: "black",
                  }}
                >
                  <i class="fa-solid fa-clock"></i>
                  <b>1 min ago</b>
                </div>
              </Link>
              <Link
                // to={`/project/${project.id}`}
                // key={project.id}
                className="dropdown-item"
              >
                <div
                  className="dropdown-project-icon"
                  style={{
                    backgroundColor: `orange`,
                    color: `${isColorLight("orange") ? "black" : "white"}`,
                  }}
                >
                  {getProjectIcon("finance")}
                </div>
                <div className="dropdown-project-info">
                  <span className="dropdown-project-title">
                    Project Unique 2
                  </span>
                  <span className="dropdown-project-description">
                    A short description for the project 2 gbdfkgn gdfngl ngf nd
                    nfnj
                  </span>
                </div>
                <div
                  className="dropdown-project-last-access"
                  style={{
                    borderColor: `orange`,
                    color: "black",
                  }}
                >
                  <i class="fa-solid fa-clock"></i>
                  <b>5 min ago</b>
                </div>
              </Link>
              <Link
                // to={`/project/${project.id}`}
                // key={project.id}
                className="dropdown-item"
              >
                <div
                  className="dropdown-project-icon"
                  style={{
                    backgroundColor: `magenta`,
                    color: `${isColorLight("magenta") ? "black" : "white"}`,
                  }}
                >
                  {getProjectIcon("travel")}
                </div>
                <div className="dropdown-project-info">
                  <span className="dropdown-project-title">
                    Project Unique 3
                  </span>
                  <span className="dropdown-project-description">
                    A short description for the project 3 gbdfkgn gdfngl ngf nd
                    nfnj
                  </span>
                </div>
                <div
                  className="dropdown-project-last-access"
                  style={{
                    borderColor: `magenta`,
                    color: "black",
                  }}
                >
                  <i class="fa-solid fa-clock"></i>
                  <b>15 min ago</b>
                </div>
              </Link>
              <Link
                // to={`/project/${project.id}`}
                // key={project.id}
                className="dropdown-item"
              >
                <div
                  className="dropdown-project-icon"
                  style={{
                    backgroundColor: `maroon`,
                    color: `${isColorLight("maroon") ? "black" : "white"}`,
                  }}
                >
                  {getProjectIcon("innovation")}
                </div>
                <div className="dropdown-project-info">
                  <span className="dropdown-project-title">
                    Project Unique 4
                  </span>
                  <span className="dropdown-project-description">
                    A short description for the project 4
                  </span>
                </div>
                <div
                  className="dropdown-project-last-access"
                  style={{
                    borderColor: `maroon`,
                    color: "black",
                  }}
                >
                  <i class="fa-solid fa-clock"></i>
                  <b>2 hours ago</b>
                </div>
              </Link>
              <Link
                // to={`/project/${project.id}`}
                // key={project.id}
                className="dropdown-item"
              >
                <div
                  className="dropdown-project-icon"
                  style={{
                    backgroundColor: `navy`,
                    color: `${isColorLight("navy") ? "black" : "white"}`,
                  }}
                >
                  {getProjectIcon("cybersecurity")}
                </div>
                <div className="dropdown-project-info">
                  <span className="dropdown-project-title">
                    Project Unique 5
                  </span>
                  <span className="dropdown-project-description">
                    A short description for the project 5
                  </span>
                </div>
                <div
                  className="dropdown-project-last-access"
                  style={{
                    borderColor: `navy`,
                    color: "black",
                  }}
                >
                  <i class="fa-solid fa-clock"></i>
                  <b>1 day ago</b>
                </div>
              </Link>
              {/* ))
              ) : (
                <span className="no-projects">No recent projects</span>
              )} */}
            </div>
          </div>
          <div className="dropdown">
            <button className="dropdown-btn">
              Important<i class="fa-regular fa-star"></i>
            </button>
            <div className="dropdown-content">
              {/* {recentProjects.length > 0 ? (
                recentProjects.map((project) => ( */}
              <Link
                // to={`/project/${project.id}`}
                // key={project.id}
                className="dropdown-item"
              >
                <div
                  className="dropdown-project-icon"
                  style={{
                    backgroundColor: `orange`,
                    color: `${isColorLight("orange") ? "black" : "white"}`,
                  }}
                >
                  {getProjectIcon("finance")}
                </div>
                <div className="dropdown-project-info">
                  <span className="dropdown-project-title">
                    Project Unique 2
                  </span>
                  <span className="dropdown-project-description">
                    A short description for the project 2 gbdfkgn gdfngl ngf nd
                    nfnj
                  </span>
                </div>
                <div
                  className="importance"
                  style={{
                    borderColor: `orange`,
                    color: "orange",
                  }}
                >
                  <i class="fa-solid fa-star"></i>
                </div>
              </Link>
              <Link
                // to={`/project/${project.id}`}
                // key={project.id}
                className="dropdown-item"
              >
                <div
                  className="dropdown-project-icon"
                  style={{
                    backgroundColor: `maroon`,
                    color: `${isColorLight("maroon") ? "black" : "white"}`,
                  }}
                >
                  {getProjectIcon("innovation")}
                </div>
                <div className="dropdown-project-info">
                  <span className="dropdown-project-title">
                    Project Unique 4
                  </span>
                  <span className="dropdown-project-description">
                    A short description for the project 4
                  </span>
                </div>
                <div
                  className="importance"
                  style={{
                    borderColor: `maroon`,
                    color: "maroon",
                  }}
                >
                  <i class="fa-solid fa-star"></i>
                </div>
              </Link>
              {/* ))
              ) : (
                <span className="no-projects">No recent projects</span>
              )} */}
            </div>
          </div>
          <button className="header-create" onClick={() => navigate("/login")}>
            Create
            <i className="fa-solid fa-folder-plus"></i>
          </button>
        </div>
        <div className="nav-end">
          <div className="nav-tools">
            <button className="navbar-btn header-search">
            <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            <button className="navbar-btn header-notifications">
              <i className="fa-regular fa-bell"></i>
            </button>
            <button className="navbar-btn header-info">
              <i className="fa-regular fa-circle-question"></i>
            </button>
            <button className="navbar-btn header-settings">
            <i className="fa-solid fa-gear"></i>
            </button>
          </div>
          {
            <div className="nav-links">
              <button
                className="navbar-btn header-logout"
                onClick={logout}
              >
                Log out
              </button>
              <button
                className="navbar-btn header-profile"
                onClick={() => navigate("/profile")}
              >
                <span className="user-name">{user ? user.username : "Anonymous"}</span>
                <div 
                className="user-image" 
                style={{ backgroundImage: `url(${user?.avatarUrl || avatarUrl})` }}></div>
              </button>
            </div>
          }
        </div>
      </nav>
    </header>
  );
};

export default Header;
