import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

// import logo from './logo.svg';
import "./App.css";

import Home from "./Sections/Home/Home";
import InfoPage from "./Sections/InfoPage/infoPage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={Home} />
          <InfoPage />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
