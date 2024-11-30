import { useRef } from "react";
import { useAuth } from "../../hooks/useAuth";
import { login } from "../../api/user";

import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

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
      const token = localStorage.getItem("token");
      logined(token);
      navigate("/");
    } catch (error) {
      console.error("Login failed", error);
      return "Такого користувача не існує";
    }
  };

  return (
    <>
      <div className="auth-container">
        <form
          className="form"
          onClick={(e) => e.stopPropagation()}
          ref={formRef}
          onSubmit={handleSubmitLogin}
        >
          <p className="form-title">Увійти</p>
          <span>Введіть наступні дані для входу</span>
          <div className="input-container">
            <div className="form-container">
              <input
                id="login-email"
                className="password-input"
                name="email"
                type="text"
                placeholder="example@gmail.com"
                required
              />
              <button
                type="button"
                // onClick={togglePasswordVisibility}
                className={`toggle-btn toggle-email`}
              >
                <i class="fa-solid fa-question"></i>
              </button>
            </div>
            {/* <input placeholder="example@gmail.com" type="text" name="email" /> */}
            {/* <i className="fa-solid fa-at"></i> */}
          </div>
          <div className="input-container">
            <InputPasswordToggle id="login-password" name="password" />
          </div>
          <button className="submit" type="submit">
            Вхід
          </button>
          {<p className="signup-link">
            Немає акаунта?
          </p>}
        </form>
      </div>
      <section className="redirect-container">
        <h5 className="redirect-text">Уперше в BoardMaster?</h5>
        <Link className="redirect-link" to={"/register" }>Зареєструватись</Link>
      </section>
    </>
  );
};

export default Login;
