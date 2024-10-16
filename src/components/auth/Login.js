import { useRef } from "react";
import { useAuth } from "../../hooks/useAuth";
import { login } from "../../api/user";

import { Navigate, useNavigate } from "react-router-dom";
import './Auth.css';

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
        <div>
            <form className="form" onClick={e => e.stopPropagation()} ref={formRef} onSubmit={handleSubmitLogin}>
                <p className="form-title">Вхід</p>
                <div className="input-container">
                    <input placeholder="Enter email" type="text" name="email" />
                    <span>
                        <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"></path>
                        </svg>
                    </span>
                </div>
                <div className="input-container">
                    <input placeholder="Enter password" type="password" name="password" />
                    <span>
                        <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"></path>
                            <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"></path>
                        </svg>
                    </span>
                </div>
                <button className="submit" type="submit">
                    Вхід
                </button>
                <p className="signup-link">
                    Немає акаунта? <br />
                    {/* <button onClick={switchFormToRegister} className="auth-btn">Зареєструватись</button> */}
                </p>
            </form>
        </div>
    );
}

export default Login;