import { useRef } from "react";
import { register } from "../../api/user";

import './Auth.css';
import { Link, useNavigate } from "react-router-dom";

import InputPasswordToggle from "../InputPasswordToggle";

import { useAuth } from "../../hooks/useAuth";

export const Register = () => {

    const formRef = useRef(null);
    const { logined } = useAuth();
    const navigate = useNavigate();

    const handleSubmitRegister = async (e) => {
        e.preventDefault();

        console.log(formRef.current.userName.value);
        console.log(formRef.current.email.value);
        console.log(formRef.current.password.value);
        try {
            const response = await register(
                formRef.current.userName.value,
                formRef.current.email.value,
                formRef.current.password.value
            );
            const token = localStorage.getItem('token');
            logined(token);
            navigate('/');

        } catch (error) {
            console.error('Registration failed', error);
        }
    }

    return (
        <div className="auth-container">
            <form className="form" onClick={e => e.stopPropagation()} ref={formRef} onSubmit={handleSubmitRegister}>
                <p className="form-title">Зареєструватись</p>
                <div className="input-container">
                    <input placeholder="Enter username" type="text" name="userName" />
                </div>
                <div className="input-container">
                    <input placeholder="Enter email" type="email" name="email" />
                    <i className="fa-solid fa-at" title="путін ПІДАРАС"></i>
                </div>
                <div className="input-container">
                    <InputPasswordToggle id="password" name="password"/>
                </div>
                <div className="input-container">
                    <InputPasswordToggle id="confirmPassword" name="confirmPassword"/>
                </div>
                <button className="submit" type="submit">
                    Зареєструватись
                </button>
                <p className="signup-link">
                    Є акаунт? - <Link to="/login">Увійти</Link>
                </p>
            </form>
        </div>
    );
}
