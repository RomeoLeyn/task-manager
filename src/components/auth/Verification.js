import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

import "./Auth.css";

export const Verification = () => {
  const {user} = useAuth();

  const handleResend = () => {
    // Logic to resend the email
    alert("Verification email resent to your inbox. Please check!");
  };

  return (
    <div className="verification-overlay">
      <div className="verification-container">
        <div className="verification-box">
            <div className="verification-icon">
            <i className="fa-solid fa-user-shield"></i>
            </div>
            <h1 className="verification-title">Let’s Make Sure It’s Really You!</h1>
            <p className="message-text">
            We've sent a verification link to your email{" "} 
            <span className="user-email">{user ?user.email : "example@gmail.com"}</span><br />
            Please check your inbox and click on the button to verify your email
            address. Once you’re verified, you’ll be all set to explore the
            platform!
            </p>    
        </div>

        <div className="verification-email-icon">
            <i className="fa-solid fa-envelope-circle-check"></i>
        </div>
        
        <div className="verification-box">
            <p className="message-text">
            If you didn't receive the email, please click on the button below to
            resend it.
            </p>
            <div className="resend-container">
            <i class="fa-solid fa-arrows-rotate"></i>
            <button onClick={handleResend} className="resend-button">
                Resend Verification Email
            </button>
            </div>
            <p className="support-text">
            Can’t find the email? Check your spam or promotions folder, or resend it <Link className="resend-link">here</Link>!
            </p>    
        </div>
        
      </div>
    </div>
  );
};
