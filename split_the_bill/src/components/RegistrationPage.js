import React from "react";

const Registration = props => {
  return (
    <div className="registration-page">
      <form onSubmit={props.register}>
        <p>Username: </p>
        <input required type="text" onChange={props.usernameInput} />
        <p>Password: </p>
        <input required type="text" onChange={props.passwordInput} />
        <p>Email: </p>
        <input required type="email" onChange={props.emailInput} />
        <button>Register</button>
      </form>
    </div>
  );
};

export default Registration;
