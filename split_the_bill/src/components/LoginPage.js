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

  userLogin = e => {
    e.preventDefault();
    this.props.userLogin({
      username: this.state.username,
      password: this.state.password
    });
  };

  render() {
    return (
      <div className="login-page">
        <form onSubmit={e => this.userLogin(e)}>
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
              type="password"
              name="password"
              placeholder="password"
              onChange={this.handleChange}
              value={this.state.password}
            />
          </div>

          <button>Login</button>
          <Link to="/signup">
            <button className="signup">Sign Up</button>
          </Link>
        </form>
      </div>
    );
  }
}

export default LoginPage;
