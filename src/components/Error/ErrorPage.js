import { Link } from "react-router-dom";
import "./ErrorPage.scss";

import error401img from "../../img/error401.png";
import { getErrorImage } from "../../utils/utils";

// console.log(getErrorImage(401));


const ErrorPage = ({ errorMessage, errorAction, errorStatus, errorTitle }) => {
  const errorImagePath = getErrorImage(errorStatus);
  console.log(errorImagePath);
  
  return (
    <div className="error-overlay">
      <div className="error-container">
        <div className="error-section">
        <div className="error-status">
          <span>{errorStatus}</span>
          </div>
          <div className="error-title">
            <h1>{errorTitle}</h1>
          </div>
          <div className="error-interaction">
            <p className="error-message">
              {errorMessage || "An unexpected error occurred."}
            </p>
            <Link to="/login" className="error-link">
              {errorAction || "Go back to login page"}
            </Link>
          </div>
        </div>
        <div className="error-image error-image-active">
          <img
            src={error401img}
            alt="Error img"
          />
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
