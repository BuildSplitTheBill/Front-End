import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, NavLink, withRouter } from "react-router-dom";

import HomeView from "../src/views/HomeView";
import FriendsView from "./views/FriendsView";
import BillsView from "./views/BillsView";
import HistoryView from "./views/HistoryView";

import AddBillForm from "./components/AddBillForm";

import "./css/index.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="nav-container">
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/friends/">Friends</NavLink>
            <NavLink to="/bills/">Bills</NavLink>
            <NavLink to="/add-bill-form/">Add a Bill</NavLink>
            <NavLink to="/history/">History</NavLink>
          </nav>
        </div>

        <Route exact path="/" render={props => <HomeView {...props} />} />

        <Route path="/friends" render={props => <FriendsView {...props} />} />

        <Route path="/bills" render={props => <BillsView {...props} />} />

        <Route
          path="/add-bill-form"
          render={props => <AddBillForm {...props} />}
        />

        <Route path="/history" render={props => <HistoryView {...props} />} />
      </div>
    );
  }
}

export default App;
