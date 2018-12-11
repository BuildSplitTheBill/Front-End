import React, { Component } from "react";

import LoginPage from "../components/LoginPage";
import Registration from "../components/RegistrationPage";

const Authenticate = App =>
  class extends Component {
    constructor() {
      super();
      this.state = {
        username: "",
        password: "",
        email: "",
        loggedIn: false,
        registration: false
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

    emailInput = ev => {
      this.setState({
        email: ev.target.value
      });
    };

    login = ev => {
      ev.preventDefault();

      let userName = this.state.username;
      let passWord = this.state.password;

      localStorage.setItem("username", userName);
      localStorage.setItem("password", passWord);

      this.setState({
        loggedIn: true,
        registration: false
      });
    };

    signUp = ev => {
      ev.preventDefault();
      this.setState({ loggedIn: false, registration: true });
    };

    register = ev => {
      ev.preventDefault();

      let userName = this.state.username;
      let passWord = this.state.password;
      let email = this.state.email;

      localStorage.setItem("username", userName);
      localStorage.setItem("password", passWord);
      localStorage.setItem("email", email);

      this.setState({
        loggedIn: true,
        registration: false
      });
    };

    logOut = ev => {
      ev.preventDefault();

      localStorage.removeItem("username");
      localStorage.removeItem("password");
      localStorage.removeItem("email");

      this.setState({
        loggedIn: false
      });
    };

    render() {
      if (this.state.loggedIn === false && this.state.registration === false) {
        return (
          <LoginPage
            login={this.login}
            usernameInput={this.usernameInput}
            passwordInput={this.passwordInput}
            emailInput={this.emailInput}
            signUp={this.signUp}
          />
        );
      } else if (this.state.registration === true) {
        return (
          <Registration
            usernameInput={this.usernameInput}
            passwordInput={this.passwordInput}
            emailInput={this.emailInput}
            register={this.register}
          />
        );
      } else if (this.state.loggedIn === true) {
        return <App logOut={this.logOut} />;
      }
    }
  };

export default Authenticate;
