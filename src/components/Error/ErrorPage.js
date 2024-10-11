import { Link } from "react-router-dom";
import './ErrorPage.css'; 

const ErrorPage = ({ errorMessage }) => {
    return (
        <div className="error-container">
            <h1 className="error-title">Oops! Something went wrong</h1>
            <p className="error-message">{errorMessage || "An unexpected error occurred."}</p>
            <Link to="/" className="error-link">Go back to Home</Link>
        </div>
    );
};

export default ErrorPage;
