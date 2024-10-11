import { useNavigate } from "react-router-dom";

import '../style/MainPage.css';
import { useEffect } from "react";

const Main = () => {

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            navigate('/projects');
        }
    })

    return (
        <div className="main-container">
            <h1>Main Page</h1>
        </div>
    );
};

export default Main;