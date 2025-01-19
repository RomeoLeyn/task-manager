import { useRef } from "react";
import { register } from "../../api/user";

import "./Auth.css";
import { Link, useNavigate } from "react-router-dom";

import InputPasswordToggle from "../InputPasswordToggle";

import { useAuth } from "../../hooks/useAuth";

export const Register = () => {
  const formRef = useRef(null);
  const { logined } = useAuth();
  const navigate = useNavigate();

  const handleSubmitRegister = async (e) => {
    e.preventDefault();
    try {
        await register(formRef.current.userName.value, formRef.current.email.value, formRef.current.password.value);
        const token = localStorage.getItem("token");
        logined(token);
        navigate("/verification");
    } catch (error) {
      console.error("Registration failed", error);
    }
  };

  return (
    <>
      <div className="auth-container">
        <form
          className="form"
          onClick={(e) => e.stopPropagation()}
          ref={formRef}
          onSubmit={handleSubmitRegister}
        >
          <p className="form-title">Sign Up</p>
          <span>Fill the following fields to sign up</span>
          <div className="input-container">
            <div className="form-container">
              <input
                id="register-username"
                className="password-input"
                name="userName"
                type="text"
                placeholder="Enter username..."
                required
              />
              <button
                type="button"
                className={`toggle-btn toggle-email`}
              >
                <i className="fa-solid fa-question"></i>
              </button>
            </div>
          </div>
          {/* <div className="input-container">
            <div className="form-container">
              <input
                id="register-firstname"
                className="password-input"
                name="firstName"
                type="text"
                placeholder="Enter first name..."
                required
              />
              <button
                type="button"
                className={`toggle-btn toggle-email`}
              >
                <i className="fa-solid fa-question"></i>
              </button>
            </div>
          </div>
          <div className="input-container">
            <div className="form-container">
              <input
                id="register-lastname"
                className="password-input"
                name="lastName"
                type="text"
                placeholder="Enter last name..."
                required
              />
              <button
                type="button"
                className={`toggle-btn toggle-email`}
              >
                <i className="fa-solid fa-question"></i>
              </button>
            </div>
          </div> */}
          <div className="input-container">
            <div className="form-container">
              <input
                id="register-email"
                className="password-input"
                name="email"
                type="text"
                placeholder="Enter email..."
                required
              />
              <button
                type="button"
                className={`toggle-btn toggle-email`}
              >
                <i className="fa-solid fa-question"></i>
              </button>
            </div>
          </div>
          <div className="input-container">
            <InputPasswordToggle id="password" name="password" placeholder={"Enter password..."}/>
          </div>
          <div className="input-container">
            <InputPasswordToggle id="confirmPassword" name="confirmPassword" placeholder={"Confirm password..."} />
          </div>
          <button className="submit" type="submit">
            Sign Up
          </button>
          <p className="signup-link">
            Can not sign up yet?
          </p>
        </form>
      </div>
      <section className="redirect-container">
        <h5 className="redirect-text">Already have an account?</h5>
        <Link className="redirect-link" to={"/login"}>
          Log In
        </Link>
      </section>
    </>
  );
};
