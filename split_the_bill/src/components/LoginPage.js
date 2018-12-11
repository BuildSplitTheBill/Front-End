import React from "react";
import { Route, Link } from "react-router-dom";

const LoginPage = props => {
  return (
    <div className="login-page">
      <form onSubmit={props.login}>
        <p>Username: </p>
        <input
          required
          type="text"
          name="username"
          onChange={props.usernameInput}
        />
        <p>Password: </p>
        <input
          required
          type="text"
          name="password"
          onChange={props.passwordInput}
        />
        <button>Login</button>
        <button onClick={props.signUp}>Sign Up</button>
      </form>
    </div>
  );
};

export default LoginPage;
