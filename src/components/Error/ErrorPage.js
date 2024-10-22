import { Link } from "react-router-dom";
import "./ErrorPage.css";

const ErrorPage = ({ errorMessage, errorAction }) => {
  return (
    <div className="error-container">
      <div className="error-section">
        <h1 className="error-title">Your session has expired</h1>
        <p className="error-message">
          {errorMessage || "An unexpected error occurred."}
        </p>
        <Link to="/login" className="error-link">
          {errorAction || "Go back to login page"}
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
