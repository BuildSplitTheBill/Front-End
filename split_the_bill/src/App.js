import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, NavLink, withRouter } from "react-router-dom";

import HomeView from "../src/views/HomeView";
import "./css/index.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="nav-container">
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/friends">Friends</NavLink>
            <NavLink to="/balances">Balances</NavLink>
            <NavLink to="/add-bill-form">Add Bill</NavLink>
            <NavLink to="/History">History</NavLink>
          </nav>
        </div>

        <Route
          exact
          path="/"
          render={props => <HomeView {...props} friends={this.props.friends} />}
        />
      </div>
    );
  }
}

export default App;
