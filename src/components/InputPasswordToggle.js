import React, { useState } from 'react';

function TogglePasswordField({ id, name }) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="form-container">
      {/* <label htmlFor="password">Password</label> */}
      <input
        id={id}
        name={name}
        type={isPasswordVisible ? 'text' : 'password'}
        placeholder="Enter password..."
        required
      />
      <button
        type="button"
        onClick={togglePasswordVisibility}
        className={`toggle-password ${isPasswordVisible ? 'fa-eye-slash' : 'fa-eye'}`}
      >
        <i className={isPasswordVisible ? 'fa fa-eye-slash' : 'fa fa-eye'}></i>
      </button>
    </div>
  );
}

export default TogglePasswordField;
