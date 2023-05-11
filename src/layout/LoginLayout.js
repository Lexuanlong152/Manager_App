import React from "react";
import Login from "../components/Login";
import "../assert/css/LoginLayout.css";
function LoginLayout() {
  return (
    <>
      <div className="auth-container">
        <div className="auth-title text-center">
          <h3>Sign in</h3>
        </div>
        <Login />
      </div>
    </>
  );
}

export default LoginLayout;
