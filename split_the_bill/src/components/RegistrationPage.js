import React from "react";

const Registration = props => {
  return (
    <div className="registration-page">
      <form onSubmit={props.register}>
        <p>Name: </p>
        <input required type="text" name="name" onChange={props.firstName} />

        <p>Username: </p>
        <input
          required
          type="text"
          name="username"
          onChange={props.usernameInput}
        />

        <p>Email: </p>
        <input required type="email" name="email" onChange={props.emailInput} />

        <p>Password: </p>
        <input
          required
          type="text"
          name="password"
          onChange={props.passwordInput}
        />

        <button>Register</button>
      </form>
    </div>
  );
};

export default Registration;
