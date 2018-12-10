import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, NavLink, withRouter } from "react-router-dom";

import HomeView from "../src/views/HomeView";
import FriendsView from "./views/FriendsView";

import "./css/index.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="nav-container">
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/friends">Friends</NavLink>
            <NavLink to="/bills">Bills</NavLink>
            <NavLink to="/add-bill-form">Add a Bill</NavLink>
            <NavLink to="/settle">Settle Up</NavLink>
            <NavLink to="/History">History</NavLink>
          </nav>
        </div>

        <Route exact path="/" render={props => <HomeView {...props} />} />

        <Route path="/friends" render={props => <FriendsView {...props} />} />
      </div>
    );
  }
}

export default App;
