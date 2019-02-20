import React, { Component } from "react";
import { Provider } from "react-redux";

import store from "./store";
import Landing from "./components/Landing";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1>Wikipedia Viewer</h1>
          <Landing />
        </div>
      </Provider>
    );
  }
}

export default App;
