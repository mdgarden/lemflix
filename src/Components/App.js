import React, { Component } from "react";
import Router from "./Router";
import Header from "./Router";

class App extends Component {
  render() {
    return (
      <Header>
        <Router />
      </Header>
    );
  }
}

export default App;
