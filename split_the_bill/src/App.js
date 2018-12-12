import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, NavLink, withRouter } from "react-router-dom";
import {
  userLogin,
  userRegistration,
  userLogout
} from "./actions/credentialsActions";
import axios from "axios";

import HomeView from "../src/views/HomeView";
import FriendsView from "./views/FriendsView";
import BillsView from "./views/BillsView";
import HistoryView from "./views/HistoryView";

import LoginPage from "./components/LoginPage";
import RegistrationPage from "./components/RegistrationPage";
import AddBillForm from "./components/AddBillForm";
import BillPage from "./components/BillPage";

import "./css/index.css";

class App extends Component {
  // componentDidMount() {
  //   axios
  //     .get("https://split-the-bill-backend.herokuapp.com/")
  //     .then(res => console.log(res))
  //     .catch(err => console.log(err));
  // }

  render() {
    if (!this.props.loggedIn) {
      return (
        <React.Fragment>
          <Route
            exact
            path="/"
            render={props => (
              <LoginPage {...props} userLogin={this.props.userLogin} />
            )}
          />

          <Route
            path="/signup"
            render={props => (
              <RegistrationPage
                {...props}
                userRegistration={this.props.userRegistration}
              />
            )}
          />
        </React.Fragment>
      );
    }

    return (
      <div className="App">
        <div className="nav-container">
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/friends">Friends</NavLink>
            <NavLink to="/bills">Bills</NavLink>
            <NavLink to="/add-bill-form">Add a Bill</NavLink>
            <NavLink to="/history">History</NavLink>
            <NavLink to="/" onClick={() => this.props.userLogout()}>
              Log Out
            </NavLink>
          </nav>
        </div>

        <Route exact path="/" render={props => <HomeView {...props} />} />

        <Route path="/friends" render={props => <FriendsView {...props} />} />

        <Route exact path="/bills" render={props => <BillsView {...props} />} />
        <Route path="/bills/bill" render={props => <BillPage {...props} />} />

        <Route
          path="/add-bill-form"
          render={props => <AddBillForm {...props} />}
        />

        <Route path="/history" render={props => <HistoryView {...props} />} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.credentialsReducer.loggedIn
});

export default withRouter(
  connect(
    mapStateToProps,
    { userLogin, userRegistration, userLogout }
  )(App)
);
