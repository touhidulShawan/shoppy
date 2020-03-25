import React from "react";
import "./FormInput.scss";

function FormInput({ handleChange, label, ...otherProps }) {
  return (
    <div className="form__input-group">
      <input className="input-field" onChange={handleChange} {...otherProps} />
    </div>
  );
}
export default FormInput;
