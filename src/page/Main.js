import { useNavigate } from "react-router-dom";

import '../style/MainPage.css';
import { useEffect } from "react";

import image from "../img/mainpage.png";

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
            <section className="content">
                <div className="text-container">
                    <h1 className="title">Керуйте своїми проектами ефективно та злагоджено з <b>MyApp</b></h1>
                    <span className="description">Організуйте завдання, команду й інструменти в одному місці. Стежте за прогресом, розставляйте пріоритети та виконуйте проекти швидше з нашим інтуїтивним інтерфейсом.</span>
                    <button className="mainpage-register" onClick={() => navigate('/register')}>Зареєструватись</button>
                </div>
                <div className="image-container">
                    <img src={image} alt="LOL" />
                </div>
            </section>
        </div>
    );
};

export default Main;