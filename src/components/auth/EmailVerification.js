import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

// import "./EmailVerification.scss";

export const EmailVerification = () => {
    const { user } = useAuth();
  
    const handleResend = () => {
      // Logic to resend the email
      alert("Verification email resent to your inbox. Please check!");
    };
  
    return (
      <div className="email-verification-overlay">
        <div className="email-verification-box">
          <div className="header-icon">
            <i className="fa-solid fa-user-shield"></i>
          </div>
          <h1 className="title">Let’s Make Sure It’s Really You!</h1>
          <p className="message-text">
            We've sent a verification link to your email{" "}
            <span className="user-email">{user ? user.email : "example@gmail.com"}</span>.
            Please check your inbox and click the button to verify your email. Once verified, you’ll be set to explore the platform!
          </p>
  
          <div className="status-icon">
            <i className="fa-solid fa-envelope-circle-check"></i>
          </div>
  
          <div className="resend-section">
            <p className="resend-info">
              If you didn't receive the email, click below to resend it.
            </p>
            <button onClick={handleResend} className="resend-button">
              <i className="fa-solid fa-arrows-rotate"></i> Resend Verification Email
            </button>
            <p className="support-text">
              Can’t find the email? Check your spam or promotions folder, or <Link className="support-link">resend it here</Link>.
            </p>
          </div>
        </div>
      </div>
    );
  };
  