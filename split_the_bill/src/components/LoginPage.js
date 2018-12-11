import React from "react";

const LoginPage = props => {
  return (
    <div className="login-page">
      <form onSubmit={props.login}>
        <input
          type="text"
          placeholder="Username"
          onChange={props.usernameInput}
        />
        <input
          type="text"
          placeholder="Password"
          onChange={props.passwordInput}
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
