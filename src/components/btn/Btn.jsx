import React from "react";
import "./Btn.scss";

function Btn({ ...props }) {
  return (
    <button className="btn" {...props}>
      {props.title}
    </button>
  );
}

export default Btn;
