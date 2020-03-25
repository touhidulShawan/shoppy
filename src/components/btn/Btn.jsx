import React from "react";
import "./Btn.scss";

function Btn({ children, isGoogleSignIn, ...props }) {
  return (
    <button
      className={`${isGoogleSignIn ? "google-signIn-btn" : ""} btn`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Btn;
