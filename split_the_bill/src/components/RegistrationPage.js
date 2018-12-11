import React from "react";

class Registration extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      username: "",
      password: "",
      email: "",
      loggedIn: false,
      registration: false
    };
  }

  render() {
    return (
      <div className="registration-page">
        <form onSubmit={this.props.userRegistration}>
          <label>Name: </label>
          <input
            required
            type="text"
            name="name"
            onChange={this.props.handleChange}
            value={this.state.name}
          />

          <label>Username: </label>
          <input
            required
            type="text"
            name="username"
            onChange={this.props.handleChange}
            value={this.state.username}
          />

          <label>Email: </label>
          <input
            required
            type="email"
            name="email"
            onChange={this.props.handleChange}
            value={this.state.email}
          />

          <label>Password: </label>
          <input
            required
            type="password"
            name="password"
            onChange={this.props.handleChange}
            value={this.state.password}
          />

          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default Registration;
