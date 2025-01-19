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
          <p className="form-title">Log In</p>
          <span>Fill in the following fields to log in</span>
          <div className="input-container">
            <div className="form-container">
              <input
                id="login-email"
                className="password-input"
                name="email"
                type="text"
                placeholder="Enter email..."
                required
              />
              <button
                type="button"
                // onClick={togglePasswordVisibility}
                className={`toggle-btn toggle-email`}
              >
                {/* <i className="fa-solid fa-question"></i> */}
                <i className="fa-solid fa-at"></i>
              </button>
            </div>
          </div>
          <div className="input-container">
            <InputPasswordToggle id="login-password" name="password" placeholder="Enter password..." />
          </div>
          <button className="submit" type="submit">
            Log In
          </button>
          {<p className="signup-link">
            Can not log in?
          </p>}
        </form>
      </div>
      <section className="redirect-container">
        <h5 className="redirect-text">First time on BoardMaster?</h5>
        <Link className="redirect-link" to={"/register" }>Sign Up</Link>
      </section>
    </>
  );
};

export default Login;
