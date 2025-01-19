import React from 'react';

const Input = (props) => {
  return (
/*     <StyledWrapper> */
      <div className="input-container">
        <input placeholder={props.placeholder} className="input-field" type="text" name={props.name} />
        <label htmlFor="input-field" className="input-label">{props.label}</label>
        <span className="input-highlight" />
      </div>
/*     </StyledWrapper> */
  );
}

export default Input;
