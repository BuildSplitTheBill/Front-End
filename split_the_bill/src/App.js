import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, NavLink, withRouter } from "react-router-dom";

import HomeView from "../src/views/HomeView";
import FriendsView from "./views/FriendsView";
import BillsView from "./views/BillsView";
import HistoryView from "./views/HistoryView";

import AddBillForm from "./components/AddBillForm";
import SettleBalances from "./components/SettleBalances";

import "./css/index.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="nav-container">
          <nav>
            <NavLink to="/:id">Home</NavLink>
            <NavLink to="/friends/:id">Friends</NavLink>
            <NavLink to="/bills/:id">Bills</NavLink>
            <NavLink to="/add-bill-form/:id">Add a Bill</NavLink>
            <NavLink to="/settle-balances/:id">Settle Up</NavLink>
            <NavLink to="/history/:id">History</NavLink>
          </nav>
        </div>

        <Route exact path="/" render={props => <HomeView {...props} />} />

        <Route path="/friends" render={props => <FriendsView {...props} />} />

        <Route path="/bills" render={props => <BillsView {...props} />} />

        <Route
          path="/add-bill-form"
          render={props => <AddBillForm {...props} />}
        />

        <Route
          path="/settle-balances"
          render={props => <SettleBalances {...props} />}
        />

        <Route path="/history" render={props => <HistoryView {...props} />} />
      </div>
    );
  }
}

export default App;
