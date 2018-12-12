import React from "react";

class Registration extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      username: "",
      password: "",
      email: "",
      loggedIn: false
    };
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  userRegistration = e => {
    e.preventDefault();
    this.props.userRegistration({
      name: this.state.name,
      email: this.state.email,
      username: this.state.username,
      password: this.state.password
    });

    this.props.history.push("/");
  };

  render() {
    return (
      <div className="registration-page">
        <form onSubmit={this.userRegistration}>
          <div className="form-input">
            <input
              required
              type="text"
              name="name"
              placeholder="name"
              onChange={this.handleChange}
              value={this.state.name}
            />
          </div>

          <div className="form-input">
            <input
              required
              type="text"
              name="username"
              placeholder="username"
              onChange={this.handleChange}
              value={this.state.username}
            />
          </div>

          <div className="form-input">
            <input
              required
              type="email"
              name="email"
              placeholder="email"
              onChange={this.handleChange}
              value={this.state.email}
            />
          </div>

          <div className="form-input">
            <input
              required
              type="password"
              name="password"
              placeholder="password"
              onChange={this.handleChange}
              value={this.state.password}
            />
          </div>

          <button type="submit" className="register">
            Register
          </button>
        </form>
      </div>
    );
  }
}

export default Registration;
