import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";

// import logo from './logo.svg';
import './App.css';

import Home from './Sections/Home/Home';
import Search from './Sections/Search/Search';
import Calendar from './Sections/Calendar/Calendar';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/calendar" component={Calendar} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
