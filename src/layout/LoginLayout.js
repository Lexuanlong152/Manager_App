import React from "react";
import Login from "../components/Login";
import "../assert/css/LoginLayout.css";
function LoginLayout(handleChange) {
  console.log(handleChange)
  return (
    <>
      <div className="auth-container">
        <div className="auth-title text-center">
          <h3>Sign in</h3>
        </div>
        <Login onChange={handleChange } />
      </div>
    </>
  );
}

export default LoginLayout;
