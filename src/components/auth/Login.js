import { useRef } from "react";
import { useAuth } from "../../hooks/useAuth";
import { login } from "../../api/user";

import { Link, useNavigate } from "react-router-dom";
import './Auth.css';

import InputPasswordToggle from "../InputPasswordToggle";


const Login = () => {
    const formRef = useRef(null);
    const { logined } = useAuth();
    const navigate = useNavigate();

    const handleSubmitLogin = async (e) => {
        e.preventDefault();

        try {
            console.log(formRef.current.email.value, formRef.current.password.value);
            await login(formRef.current.email.value, formRef.current.password.value);
            const token = localStorage.getItem('token');
            logined(token);
            navigate('/');
        } catch (error) {
            console.error('Login failed', error);
            return "Такого користувача не існує";
        }
    }

    return (
        <div className="auth-container">
            <form className="form" onClick={e => e.stopPropagation()} ref={formRef} onSubmit={handleSubmitLogin}>
                <p className="form-title">Вхід</p>
                <div className="input-container">
                    <input placeholder="example@gmail.com" type="text" name="email" />
                    <i class="fa-solid fa-at" title="путін ПІДАРАС"></i>
                </div>
                <div className="input-container">
                    <InputPasswordToggle id="password" name="password" />
                </div>
                <button className="submit" type="submit">
                    Вхід
                </button>
                <p className="signup-link">
                    Немає акаунта? - <Link to={"/register"}>Зареєструватись</Link> 
                </p>
            </form>
        </div>
    );
}

export default Login;