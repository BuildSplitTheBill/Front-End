import React, { Component } from "react";
import LoginPage from "../components/LoginPage";

const Authenticate = App =>
  class extends Component {
    constructor() {
      super();
      this.state = {
        username: "",
        password: "",
        loggedIn: false
      };
    }

    componentDidMount() {
      const username = localStorage.getItem("username");
      if (this.state.loggedIn === false && username !== null) {
        this.setState({
          loggedIn: true
        });
      }
    }

    usernameInput = ev => {
      this.setState({
        username: ev.target.value
      });
    };

    passwordInput = ev => {
      this.setState({
        password: ev.target.value
      });
    };

    login = ev => {
      ev.preventDefault();
      let userName = this.state.username;
      let passWord = this.state.password;
      localStorage.setItem("username", userName);
      localStorage.setItem("password", passWord);
      this.setState({
        loggedIn: true
      });
    };

    logOut = ev => {
      ev.preventDefault();
      localStorage.removeItem("username");
      localStorage.removeItem("password");
      this.setState({
        loggedIn: false
      });
    };

    render() {
      if (this.state.loggedIn === false) {
        return (
          <LoginPage
            login={this.login}
            usernameInput={this.usernameInput}
            passwordInput={this.passwordInput}
          />
        );
      } else {
        return <App logOut={this.logOut} />;
      }
    }
  };

export default Authenticate;
