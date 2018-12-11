import React from "react";
import { Link } from "react-router-dom";

class LoginPage extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      loggedIn: false,
      registration: false
    };
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.userLogin({
      username: this.state.username,
      password: this.state.password
    });
  };

  render() {
    return (
      <div className="login-page">
        <form onSubmit={e => this.submitHandler(e)}>
          <label>Username: </label>
          <input
            required
            type="text"
            name="username"
            onChange={this.handleChange}
            value={this.state.username}
          />
          <label>Password: </label>
          <input
            required
            type="password"
            name="password"
            onChange={this.handleChange}
            value={this.state.password}
          />
          <button>Login</button>
        </form>
        <Link to="/signup">
          <button>Sign Up</button>
        </Link>
      </div>
    );
  }
}

export default LoginPage;
