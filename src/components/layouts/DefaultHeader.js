import { Link } from "react-router-dom";

import "./Header.scss";

import { useNavigate } from "react-router-dom";
import { getProjectIcon, isColorLight } from "../../utils/utils";
import avatarUrl from "../../img/avatar.png";

const DefaultHeader = () => {
  const navigate = useNavigate();
  
  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-start">
          <Link to="/" className="logo">
            <i className="fa-solid fa-table-columns"></i>
            <span className="name">BoardMaster</span>
          </Link>
        </div>
        <div className="nav-end">
          <div className="nav-tools">
            <button className="navbar-btn header-info">
              <i className="fa-regular fa-circle-question"></i>
            </button>
          </div>
          {
            <div className="nav-links">

                          <button
              className="navbar-btn header-login"
              onClick={() => navigate("/login")}
            >
              Log In
            </button>
            <button
              className="navbar-btn header-register"
              onClick={() => navigate("/register")}
            >
              Sign Up
            </button>
            </div>
          }
        </div>
      </nav>
    </header>
  );
};

export default DefaultHeader;
