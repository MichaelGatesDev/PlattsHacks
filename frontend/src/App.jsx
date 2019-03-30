import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";

// import logo from './logo.svg';
import './App.css';

import Home from './Sections/Home/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={Home} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;