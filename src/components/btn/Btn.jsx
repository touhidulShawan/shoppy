import React from "react";
import "./Btn.scss";

function Btn({ children, ...props }) {
  return (
    <button className="btn" {...props}>
      {children}
    </button>
  );
}

export default Btn;
