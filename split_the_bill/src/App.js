import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, NavLink, withRouter } from "react-router-dom";

import "./css/index.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>This is App.js</h1>
      </div>
    );
  }
}

export default App;
