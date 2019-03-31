import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

// import logo from './logo.svg';
import "./App.css";

import Home from './Sections/Home/Home';
import Search from './Sections/Search/Search';
import Calendar from './Sections/Calendar/Calendar';
import InfoPage from "./Sections/InfoPage/infoPage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/calendar" component={Calendar} />
          <Route exact path="/clubs/:id" component={InfoPage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
